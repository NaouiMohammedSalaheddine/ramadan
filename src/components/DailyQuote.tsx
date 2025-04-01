import React, { useState, useEffect } from 'react';

interface Quote {
  text: string;
  source: string;
}

const quotes: Quote[] = [
  {
    text: "Ramadan is the month whose beginning is mercy, whose middle is forgiveness and whose end is freedom from fire.",
    source: "Prophet Muhammad (PBUH)"
  },
  {
    text: "Whoever fasts during Ramadan out of sincere faith and hoping to attain Allah's rewards, then all his past sins will be forgiven.",
    source: "Sahih Al-Bukhari"
  },
  {
    text: "When the month of Ramadan starts, the gates of heaven are opened and the gates of Hell are closed and the devils are chained.",
    source: "Sahih Al-Bukhari"
  },
  {
    text: "He who gives food for a fasting person to break his fast, he will receive the same reward as him, without nothing being reduced from the fasting person's reward.",
    source: "At-Tirmidhi"
  },
  {
    text: "There is a gate in Paradise called Ar-Raiyan, through which only those who observe fasting will enter on the Day of Resurrection, and when they enter, it will be closed and nobody else will enter through it.",
    source: "Sahih Al-Bukhari"
  },
  {
    text: "The supplication of three persons is never turned away: a fasting person until he breaks his fast, a just ruler, and the supplication of the oppressed person.",
    source: "At-Tirmidhi"
  },
  {
    text: "When the first night of Ramadan comes, the devils and rebellious jinn are chained up, and the gates of Hell are closed, not one gate of it is opened.",
    source: "Sunan Ibn Majah"
  }
];

interface DailyQuoteProps {
  className?: string;
}

const DailyQuote: React.FC<DailyQuoteProps> = ({ className }) => {
  const [quote, setQuote] = useState<Quote>();
  
  useEffect(() => {
    // Get the day of the year to choose a quote that remains the same all day
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Use the day of the year to get a consistent quote for the day
    const quoteIndex = dayOfYear % quotes.length;
    setQuote(quotes[quoteIndex]);
  }, []);

  if (!quote) return null;

  return (
    <div className={`glass-card p-6 sm:p-8 rounded-2xl backdrop-blur-md ${className}`}>
      <div className="w-12 h-12 mb-4 text-ramadan-gold opacity-80">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>
      <blockquote className="mb-4">
        <p className="text-ramadan-navy dark:text-ramadan-sand font-serif text-lg sm:text-xl leading-relaxed italic">
          "{quote.text}"
        </p>
      </blockquote>
      <footer className="text-ramadan-navy/70 dark:text-ramadan-sand/70 text-sm font-medium">
        — {quote.source}
      </footer>
    </div>
  );
};

export default DailyQuote;
