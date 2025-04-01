
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-ramadan-navy text-white/90 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-ramadan-gold">
              <div className="h-9 w-9 relative">
                <div className="absolute inset-0 bg-ramadan-gold rounded-full opacity-20 animate-pulse-gentle"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                    <path d="M12 6C11.45 6 11 6.45 11 7V12C11 12.55 11.45 13 12 13H16C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11H13V7C13 6.45 12.55 6 12 6Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <span className="font-display font-semibold text-xl tracking-tight">Ramadan<span className="text-white">Tapestry</span></span>
            </Link>
            <p className="text-sm text-white/70 max-w-xs">
              Your companion for a meaningful Ramadan journey, helping you connect, reflect, and grow during this blessed month.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-ramadan-gold">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-ramadan-gold transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/calendar" className="text-sm hover:text-ramadan-gold transition-colors duration-200">Calendar</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm hover:text-ramadan-gold transition-colors duration-200">Dashboard</Link>
              </li>
              <li>
                <Link to="/community" className="text-sm hover:text-ramadan-gold transition-colors duration-200">Community</Link>
              </li>
              <li>
                <Link to="/quran" className="text-sm hover:text-ramadan-gold transition-colors duration-200">Quran & Dua</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-ramadan-gold">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-ramadan-gold transition-colors duration-200">Prayer Times</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-ramadan-gold transition-colors duration-200">Charity Partners</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-ramadan-gold transition-colors duration-200">Islamic Articles</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-ramadan-gold transition-colors duration-200">Ramadan Guide</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-ramadan-gold transition-colors duration-200">FAQs</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-ramadan-gold">Connect With Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-ramadan-gold transition-colors duration-200">Contact</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-ramadan-gold transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-ramadan-gold transition-colors duration-200">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-ramadan-gold transition-colors duration-200">Terms of Service</a>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/80 hover:text-ramadan-gold transition-colors duration-200" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-ramadan-gold transition-colors duration-200" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-ramadan-gold transition-colors duration-200" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-ramadan-gold transition-colors duration-200" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">© {currentYear} RamadanTapestry. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-white/60 hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-xs text-white/60 hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-xs text-white/60 hover:text-white transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
