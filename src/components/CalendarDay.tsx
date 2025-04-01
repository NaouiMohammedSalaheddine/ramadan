
import React, { useState } from 'react';

interface DayTask {
  id: string;
  title: string;
  completed: boolean;
  type: 'fasting' | 'prayer' | 'deed' | 'quran';
}

interface CalendarDayProps {
  date: Date;
  hijriDate: string;
  dayNumber: number;
  isToday: boolean;
  tasks: DayTask[];
  onTaskToggle: (taskId: string, completed: boolean) => void;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ 
  date, 
  hijriDate, 
  dayNumber, 
  isToday, 
  tasks, 
  onTaskToggle 
}) => {
  const [expanded, setExpanded] = useState(isToday);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Get task completion counts
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  // Format date
  const formattedDate = new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    day: 'numeric' 
  }).format(date);

  // Icon for task type
  const getTaskIcon = (type: string) => {
    switch (type) {
      case 'fasting':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
        );
      case 'prayer':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 20.5H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z"></path>
            <path d="M12 3v6"></path>
            <path d="M8 9h8"></path>
          </svg>
        );
      case 'deed':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        );
      case 'quran':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${
      isToday 
        ? 'border-ramadan-gold shadow-gold' 
        : 'border-gray-200 dark:border-gray-700 hover:border-ramadan-gold/50'
    } ${expanded ? 'shadow-md' : ''}`}>
      <div 
        className={`flex justify-between items-center p-4 cursor-pointer ${
          isToday ? 'bg-ramadan-gold/10' : ''
        }`}
        onClick={toggleExpand}
      >
        <div className="flex items-center space-x-3">
          <div className={`flex flex-col items-center justify-center w-10 h-10 rounded-full ${
            isToday 
              ? 'bg-ramadan-gold text-white' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
          }`}>
            <span className="font-display font-medium text-sm">{dayNumber}</span>
          </div>
          <div>
            <h4 className="font-medium text-sm">{formattedDate}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{hijriDate}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-ramadan-gold rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">{completedTasks}/{totalTasks}</span>
        </div>
      </div>
      
      {expanded && (
        <div className="px-4 pb-4 animate-fade-in">
          <ul className="space-y-2 mt-2">
            {tasks.map(task => (
              <li key={task.id} className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={(e) => onTaskToggle(task.id, e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-ramadan-gold focus:ring-ramadan-gold"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${task.completed ? 'line-through text-gray-400 dark:text-gray-500' : ''}`}>
                      {task.title}
                    </span>
                    <span className={`text-xs ${
                      task.type === 'fasting' ? 'text-blue-500' :
                      task.type === 'prayer' ? 'text-purple-500' :
                      task.type === 'deed' ? 'text-green-500' :
                      'text-ramadan-gold'
                    }`}>
                      {getTaskIcon(task.type)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalendarDay;
