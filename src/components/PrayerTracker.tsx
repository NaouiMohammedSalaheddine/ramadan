
import React, { useState } from 'react';

interface Prayer {
  id: string;
  name: string;
  time: string;
  completed: boolean;
}

interface PrayerTrackerProps {
  date: Date;
  className?: string;
}

const PrayerTracker: React.FC<PrayerTrackerProps> = ({ date, className }) => {
  const [prayers, setPrayers] = useState<Prayer[]>([
    { id: 'fajr', name: 'Fajr', time: '5:15 AM', completed: false },
    { id: 'dhuhr', name: 'Dhuhr', time: '12:30 PM', completed: false },
    { id: 'asr', name: 'Asr', time: '3:45 PM', completed: false },
    { id: 'maghrib', name: 'Maghrib', time: '6:30 PM', completed: false },
    { id: 'isha', name: 'Isha', time: '8:00 PM', completed: false },
    { id: 'taraweeh', name: 'Taraweeh', time: '9:15 PM', completed: false },
  ]);

  const togglePrayer = (id: string) => {
    setPrayers(prevPrayers => 
      prevPrayers.map(prayer => 
        prayer.id === id ? { ...prayer, completed: !prayer.completed } : prayer
      )
    );
  };

  // Format date
  const formattedDate = new Intl.DateTimeFormat('en-US', { 
    weekday: 'long',
    month: 'long', 
    day: 'numeric',
    year: 'numeric'
  }).format(date);

  // Calculate progress
  const completedPrayers = prayers.filter(prayer => prayer.completed).length;
  const totalPrayers = prayers.length;
  const progress = totalPrayers > 0 ? (completedPrayers / totalPrayers) * 100 : 0;

  return (
    <div className={`glass-card rounded-2xl p-6 ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-display text-xl font-semibold text-ramadan-navy dark:text-white">Daily Prayers</h3>
        <div className="text-sm text-ramadan-navy/70 dark:text-white/70">{formattedDate}</div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-ramadan-navy/70 dark:text-white/70">
            Today's Progress
          </span>
          <span className="text-sm font-medium text-ramadan-navy/70 dark:text-white/70">
            {completedPrayers}/{totalPrayers}
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-gold rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-4">
        {prayers.map(prayer => (
          <div 
            key={prayer.id}
            onClick={() => togglePrayer(prayer.id)}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
              prayer.completed 
                ? 'bg-ramadan-gold/20 dark:bg-ramadan-gold/30' 
                : 'bg-white/50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-5 h-5 flex items-center justify-center rounded-full border ${
                prayer.completed 
                  ? 'bg-ramadan-gold border-ramadan-gold text-white' 
                  : 'border-gray-300 dark:border-gray-600'
              }`}>
                {prayer.completed && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>
              <span className={`font-medium ${
                prayer.completed 
                  ? 'text-ramadan-navy dark:text-white' 
                  : 'text-ramadan-navy/80 dark:text-white/80'
              }`}>
                {prayer.name}
              </span>
            </div>
            <span className="text-sm text-ramadan-navy/60 dark:text-white/60">{prayer.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerTracker;
