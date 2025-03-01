import { useState, useEffect } from 'react';

export default function useResponsiveHistory() {
  const [historyDays, setHistoryDays] = useState(90);

  useEffect(() => {
    // Function to update history days based on screen width
    const updateHistoryDays = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setHistoryDays(90);
      } else if (width >= 768) {
        setHistoryDays(60);
      } else {
        setHistoryDays(30);
      }
    };

    updateHistoryDays();

    // Add event listener for window resize
    window.addEventListener('resize', updateHistoryDays);

    // Clean up event listener
    return () => window.removeEventListener('resize', updateHistoryDays);
  }, []);

  return { historyDays };
}
