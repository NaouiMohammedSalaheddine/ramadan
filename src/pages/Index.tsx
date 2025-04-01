
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CountdownTimer from '../components/CountdownTimer';
import DailyQuote from '../components/DailyQuote';

const Index: React.FC = () => {
  // Set Eid date (example date - this should be updated for the correct year)
  const eidDate = new Date('2023-04-21T00:00:00');
  
  // References for animation elements
  const featuresRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col islamic-pattern-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-blue opacity-90 z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-white/90 text-sm font-medium">Welcome to the blessed month</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 fade-in-bottom">
              Ramadan Kareem
              <span className="block text-ramadan-gold mt-2">رمضان كريم</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto fade-in-bottom-delayed">
              Join our community in making the most of this holy month with prayer tracking, daily reflections, and spiritual growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 fade-in-bottom-delayed">
              <Link 
                to="/calendar" 
                className="px-8 py-3 bg-ramadan-gold text-ramadan-navy font-medium rounded-lg shadow-gold hover:shadow-lg hover:brightness-105 transition-all duration-300"
              >
                View Calendar
              </Link>
              <Link 
                to="/dashboard" 
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                My Dashboard
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-16 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white dark:to-ramadan-midnight z-10"></div>
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-ramadan-gold opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-ramadan-blue opacity-20 rounded-full blur-3xl animate-float"></div>
      </section>
      
     {/* Countdown Section */}
<section className="py-16 px-4 relative z-20">
  <div className="container mx-auto">
    <div className="max-w-4xl mx-auto">
      {/* Replace the old CountdownTimer with the new self-contained version */}
      <CountdownTimer />
      <DailyQuote className="mt-10" />
    </div>
  </div>
</section>
      
      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4 opacity-0">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ramadan-navy dark:text-white mb-4">
              Features to Enrich Your Ramadan
            </h2>
            <p className="text-ramadan-navy/70 dark:text-white/70 max-w-2xl mx-auto">
              Explore our comprehensive tools designed to make your Ramadan more meaningful, organized, and spiritually fulfilling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-ramadan-gold/10 rounded-lg flex items-center justify-center mb-6 text-ramadan-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-ramadan-navy dark:text-white mb-3">
                Ramadan Calendar
              </h3>
              <p className="text-ramadan-navy/70 dark:text-white/70 mb-4">
                Track your Ramadan journey with an interactive calendar showing both Gregorian and Hijri dates, prayer times, and daily tasks.
              </p>
              <Link 
                to="/calendar"
                className="text-ramadan-gold font-medium inline-flex items-center hover:underline"
              >
                <span>View Calendar</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-ramadan-gold/10 rounded-lg flex items-center justify-center mb-6 text-ramadan-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9z"></path>
                  <path d="M17 9V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4"></path>
                  <circle cx="12" cy="13" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-ramadan-navy dark:text-white mb-3">
                Prayer Tracker
              </h3>
              <p className="text-ramadan-navy/70 dark:text-white/70 mb-4">
                Keep track of your daily prayers, Taraweeh, and extra devotional activities with our intuitive prayer tracker dashboard.
              </p>
              <Link 
                to="/dashboard"
                className="text-ramadan-gold font-medium inline-flex items-center hover:underline"
              >
                <span>Go to Dashboard</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-ramadan-gold/10 rounded-lg flex items-center justify-center mb-6 text-ramadan-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-ramadan-navy dark:text-white mb-3">
                Community Space
              </h3>
              <p className="text-ramadan-navy/70 dark:text-white/70 mb-4">
                Connect with other Muslims during this blessed month, share experiences, and inspire each other on your spiritual journey.
              </p>
              <Link 
                to="/community"
                className="text-ramadan-gold font-medium inline-flex items-center hover:underline"
              >
                <span>Join Community</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            
            {/* Feature 4 */}
            <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-ramadan-gold/10 rounded-lg flex items-center justify-center mb-6 text-ramadan-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-ramadan-navy dark:text-white mb-3">
                Quran & Duas
              </h3>
              <p className="text-ramadan-navy/70 dark:text-white/70 mb-4">
                Access the Quran, special Ramadan duas, and daily recitation goals to enhance your spiritual connection during the holy month.
              </p>
              <Link 
                to="/quran"
                className="text-ramadan-gold font-medium inline-flex items-center hover:underline"
              >
                <span>Explore Resources</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            
            {/* Feature 5 */}
            <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-ramadan-gold/10 rounded-lg flex items-center justify-center mb-6 text-ramadan-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-ramadan-navy dark:text-white mb-3">
                Good Deeds Tracker
              </h3>
              <p className="text-ramadan-navy/70 dark:text-white/70 mb-4">
                Record and track your daily acts of kindness, charity, and ibadah to maximize your rewards during this blessed month.
              </p>
              <Link 
                to="/dashboard"
                className="text-ramadan-gold font-medium inline-flex items-center hover:underline"
              >
                <span>Start Tracking</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            
            {/* Feature 6 */}
            <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-ramadan-gold/10 rounded-lg flex items-center justify-center mb-6 text-ramadan-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-ramadan-navy dark:text-white mb-3">
                Educational Resources
              </h3>
              <p className="text-ramadan-navy/70 dark:text-white/70 mb-4">
                Expand your Islamic knowledge with our collection of articles, videos, and resources specifically curated for Ramadan.
              </p>
              <Link 
                to="/dashboard"
                className="text-ramadan-gold font-medium inline-flex items-center hover:underline"
              >
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-blue opacity-90 z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Begin Your Ramadan Journey Today
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Join our growing community of Muslims dedicated to making the most of this blessed month. Start tracking your prayers, reading Quran, and connecting with others on the same spiritual path.
            </p>
            <Link 
              to="/dashboard" 
              className="inline-block px-8 py-3 bg-ramadan-gold text-ramadan-navy font-medium rounded-lg shadow-lg hover:shadow-xl hover:brightness-105 transition-all duration-300"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
