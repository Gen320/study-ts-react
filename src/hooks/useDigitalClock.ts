import { useEffect, useState } from 'react';

type UseDigitalClock = () => {
  currentTime: string;
};

export const useDigitalClock: UseDigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return {
    currentTime,
  };
};
