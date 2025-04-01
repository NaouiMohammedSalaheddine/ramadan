import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Function to calculate approximate Eid al-Fitr date (10th Shawwal)
  const calculateEidDate = () => {
    const currentYear = new Date().getFullYear();
    // Approximation (Eid is ~April 10, 2024 - adjust yearly)
    // In reality, you'd use moon sighting data
    let eidDate;
    
    if (currentYear === 2024) {
      eidDate = new Date('April 10, 2024 00:00:00');
    } else if (currentYear === 2025) {
      eidDate = new Date('March 31, 2025 00:00:00');
    } else {
      // Default calculation (add ~11 days earlier each year)
      const yearsDifference = currentYear - 2024;
      eidDate = new Date(`April ${10 - (yearsDifference * 11)} ${currentYear} 00:00:00`);
    }
    
    return eidDate;
  };

  const [targetDate, setTargetDate] = useState(calculateEidDate());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      let difference = targetDate - now;

      // If Eid has passed, calculate next year's date
      if (difference < 0) {
        const newEidDate = calculateEidDate();
        setTargetDate(newEidDate);
        difference = newEidDate - now;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Initial update
    updateCountdown();

    // Update every second
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
        Eid al-Fitr {targetDate.getFullYear()} Countdown
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Expected: {targetDate.toLocaleDateString('en-US', { 
          weekday: 'long', 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric' 
        })}
      </p>
      
      <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl md:text-3xl font-bold text-gray-800">{timeLeft.days}</div>
          <div className="text-gray-500 text-sm">Days</div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl md:text-3xl font-bold text-gray-800">{timeLeft.hours}</div>
          <div className="text-gray-500 text-sm">Hours</div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl md:text-3xl font-bold text-gray-800">{timeLeft.minutes}</div>
          <div className="text-gray-500 text-sm">Minutes</div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
          <div className="text-2xl md:text-3xl font-bold text-gray-800">{timeLeft.seconds}</div>
          <div className="text-gray-500 text-sm">Seconds</div>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">
        *Actual date may vary by 1 day depending on moon sighting
      </p>
    </div>
  );
};

export default CountdownTimer;