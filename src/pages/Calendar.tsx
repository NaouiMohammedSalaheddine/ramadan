
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CalendarDay from '../components/CalendarDay';
import DailyQuote from '../components/DailyQuote';

interface DayTask {
  id: string;
  title: string;
  completed: boolean;
  type: 'fasting' | 'prayer' | 'deed' | 'quran';
}

interface CalendarDayData {
  date: Date;
  hijriDate: string;
  dayNumber: number;
  isToday: boolean;
  tasks: DayTask[];
}

const Calendar: React.FC = () => {
  // Sample data for demonstration
  const generateDays = (): CalendarDayData[] => {
    const today = new Date();
    const result: CalendarDayData[] = [];
    
    // Generate 30 days for Ramadan
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(today.getDate() - today.getDay() + i);
      
      // Sample hijri date (this would normally be calculated properly)
      const hijriDay = i + 1;
      const hijriDate = `Ramadan ${hijriDay}`;
      
      // Generate sample tasks for each day
      const tasks: DayTask[] = [
        {
          id: `fasting-${i}`,
          title: 'Fast from dawn to sunset',
          completed: i < today.getDay(),
          type: 'fasting'
        },
        {
          id: `prayer-${i}`,
          title: 'Complete 5 daily prayers',
          completed: i < today.getDay(),
          type: 'prayer'
        },
        {
          id: `taraweeh-${i}`,
          title: 'Perform Taraweeh prayer',
          completed: i < today.getDay(),
          type: 'prayer'
        },
        {
          id: `quran-${i}`,
          title: 'Read one juz of Quran',
          completed: i < today.getDay() - 1,
          type: 'quran'
        },
        {
          id: `deed-${i}`,
          title: 'Do a good deed',
          completed: i < today.getDay() - 2,
          type: 'deed'
        }
      ];
      
      result.push({
        date,
        hijriDate,
        dayNumber: hijriDay,
        isToday: i === today.getDay() - 1,
        tasks
      });
    }
    
    return result;
  };
  
  const [calendarDays, setCalendarDays] = useState<CalendarDayData[]>(generateDays());
  
  const handleTaskToggle = (dayIndex: number, taskId: string, completed: boolean) => {
    const updatedDays = [...calendarDays];
    const day = updatedDays[dayIndex];
    
    const updatedTasks = day.tasks.map(task => 
      task.id === taskId ? { ...task, completed } : task
    );
    
    updatedDays[dayIndex] = { ...day, tasks: updatedTasks };
    setCalendarDays(updatedDays);
  };
  
  return (
    <div className="min-h-screen flex flex-col islamic-pattern-bg">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <header className="mb-10 text-center">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-ramadan-navy dark:text-white mb-4">
                Ramadan Calendar
              </h1>
              <p className="text-ramadan-navy/70 dark:text-white/70 max-w-2xl mx-auto">
                Track your daily prayers, fasting, Quran reading, and good deeds throughout the blessed month of Ramadan.
              </p>
            </header>
            
            <div className="mb-10">
              <DailyQuote />
            </div>
            
            <div className="bg-white/50 dark:bg-ramadan-navy/30 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {calendarDays.map((day, index) => (
                  <CalendarDay
                    key={index}
                    date={day.date}
                    hijriDate={day.hijriDate}
                    dayNumber={day.dayNumber}
                    isToday={day.isToday}
                    tasks={day.tasks}
                    onTaskToggle={(taskId, completed) => handleTaskToggle(index, taskId, completed)}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-sm text-ramadan-navy/60 dark:text-white/60">
                Note: Hijri dates are approximate and may vary based on moon sightings in your location.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Calendar;
