import { useEffect, useState } from 'react';

type UseTimer = () => {
  seconds: number;
  isActive: boolean;
  handleClickToggle: () => void;
  handleClickReset: () => void;
};

export const useTimer: UseTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval); //二回目以降は毎回変わる
  }, [isActive, seconds]);

  const handleClickToggle = () => {
    setIsActive((prev) => !prev);
  };

  const handleClickReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return {
    seconds,
    isActive,
    handleClickToggle,
    handleClickReset,
  };
};
