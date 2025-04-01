
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PrayerTracker from '../components/PrayerTracker';

interface GoodDeed {
  id: string;
  title: string;
  completed: boolean;
  date: Date;
}

interface QuranGoal {
  id: string;
  title: string;
  progress: number;
  total: number;
}

const Dashboard: React.FC = () => {
  const today = new Date();
  
  // Sample good deeds
  const [goodDeeds, setGoodDeeds] = useState<GoodDeed[]>([
    { id: 'deed-1', title: 'Give charity to a local masjid', completed: true, date: today },
    { id: 'deed-2', title: 'Help an elderly neighbor', completed: false, date: today },
    { id: 'deed-3', title: 'Share iftar with a friend', completed: false, date: today },
    { id: 'deed-4', title: 'Visit a sick relative', completed: false, date: today },
    { id: 'deed-5', title: 'Donate to a food bank', completed: true, date: today },
  ]);
  
  // Sample Quran goals
  const [quranGoals, setQuranGoals] = useState<QuranGoal[]>([
    { id: 'quran-1', title: 'Read Juz 1', progress: 20, total: 20 },
    { id: 'quran-2', title: 'Read Juz 2', progress: 15, total: 20 },
    { id: 'quran-3', title: 'Read Juz 3', progress: 5, total: 20 },
    { id: 'quran-4', title: 'Read Juz 4', progress: 0, total: 20 },
    { id: 'quran-5', title: 'Read Juz 5', progress: 0, total: 20 },
  ]);
  
  // New good deed input
  const [newDeed, setNewDeed] = useState('');
  
  const toggleGoodDeed = (id: string) => {
    setGoodDeeds(prevDeeds => 
      prevDeeds.map(deed => 
        deed.id === id ? { ...deed, completed: !deed.completed } : deed
      )
    );
  };
  
  const addGoodDeed = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDeed.trim() === '') return;
    
    const deed: GoodDeed = {
      id: `deed-${Date.now()}`,
      title: newDeed,
      completed: false,
      date: new Date()
    };
    
    setGoodDeeds([deed, ...goodDeeds]);
    setNewDeed('');
  };
  
  const updateQuranProgress = (id: string, newProgress: number) => {
    setQuranGoals(prevGoals => 
      prevGoals.map(goal => 
        goal.id === id ? { ...goal, progress: newProgress } : goal
      )
    );
  };
  
  // Calculate overall progress stats
  const completedDeeds = goodDeeds.filter(deed => deed.completed).length;
  const totalDeeds = goodDeeds.length;
  const deedsProgress = totalDeeds > 0 ? (completedDeeds / totalDeeds) * 100 : 0;
  
  const totalQuranProgress = quranGoals.reduce((sum, goal) => sum + goal.progress, 0);
  const totalQuranPages = quranGoals.reduce((sum, goal) => sum + goal.total, 0);
  const quranProgress = totalQuranPages > 0 ? (totalQuranProgress / totalQuranPages) * 100 : 0;
  
  return (
    <div className="min-h-screen flex flex-col islamic-pattern-bg">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <header className="mb-10 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-ramadan-navy dark:text-white mb-4">
              My Ramadan Dashboard
            </h1>
            <p className="text-ramadan-navy/70 dark:text-white/70">
              Track your spiritual journey throughout Ramadan with prayer tracking, good deeds, and Quran reading goals.
            </p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-1">
              <PrayerTracker date={today} className="mb-8" />
              
              <div className="glass-card rounded-2xl p-6 mb-6">
                <h2 className="font-display text-xl font-semibold text-ramadan-navy dark:text-white mb-6">
                  Overall Progress
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-ramadan-navy/80 dark:text-white/80">
                        Good Deeds
                      </span>
                      <span className="text-sm font-medium text-ramadan-navy/80 dark:text-white/80">
                        {completedDeeds}/{totalDeeds}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${deedsProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-ramadan-navy/80 dark:text-white/80">
                        Quran Reading
                      </span>
                      <span className="text-sm font-medium text-ramadan-navy/80 dark:text-white/80">
                        {totalQuranProgress}/{totalQuranPages} pages
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${quranProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              {/* Good Deeds Tracker */}
              <div className="glass-card rounded-2xl p-6">
                <h2 className="font-display text-xl font-semibold text-ramadan-navy dark:text-white mb-4">
                  Good Deeds Tracker
                </h2>
                
                <form onSubmit={addGoodDeed} className="mb-6">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newDeed}
                      onChange={(e) => setNewDeed(e.target.value)}
                      placeholder="Add a new good deed..."
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-ramadan-navy/30 text-ramadan-navy dark:text-white focus:outline-none focus:ring-1 focus:ring-ramadan-gold"
                    />
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-ramadan-gold text-white font-medium rounded-lg hover:bg-ramadan-gold/90 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </form>
                
                <div className="space-y-3">
                  {goodDeeds.length === 0 ? (
                    <p className="text-center py-4 text-ramadan-navy/60 dark:text-white/60">
                      No good deeds added yet. Start by adding one above!
                    </p>
                  ) : (
                    goodDeeds.map(deed => (
                      <div 
                        key={deed.id}
                        className={`flex items-center space-x-3 p-3 rounded-lg ${
                          deed.completed 
                            ? 'bg-green-50 dark:bg-green-900/20' 
                            : 'bg-white/50 dark:bg-white/5'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={deed.completed}
                          onChange={() => toggleGoodDeed(deed.id)}
                          className="w-5 h-5 rounded border-gray-300 text-green-500 focus:ring-green-500"
                        />
                        <span className={`flex-1 ${
                          deed.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
                        }`}>
                          {deed.title}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {deed.date.toLocaleDateString()}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
              
              {/* Quran Reading Tracker */}
              <div className="glass-card rounded-2xl p-6">
                <h2 className="font-display text-xl font-semibold text-ramadan-navy dark:text-white mb-6">
                  Quran Reading Goals
                </h2>
                
                <div className="space-y-6">
                  {quranGoals.map(goal => (
                    <div key={goal.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-ramadan-navy dark:text-white">
                          {goal.title}
                        </span>
                        <span className="text-sm text-ramadan-navy/70 dark:text-white/70">
                          {goal.progress}/{goal.total} pages
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-purple-500 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${(goal.progress / goal.total) * 100}%` }}
                          ></div>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max={goal.total}
                          value={goal.progress}
                          onChange={(e) => updateQuranProgress(goal.id, parseInt(e.target.value))}
                          className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
