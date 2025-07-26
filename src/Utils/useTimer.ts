import {useEffect, useState} from 'react';

const getSecondsFromDate = (date: Date) => {
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
};

export const useTimer = (startTime: number) => {
  const [initTime, setInitTime] = useState(getSecondsFromDate(new Date()));
  const [upTime, setUpTime] = useState(
    getSecondsFromDate(new Date()) + startTime,
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (upTime - initTime > 0) {
        const curr_sec = getSecondsFromDate(new Date());
        if (upTime - curr_sec > 0) {
          setInitTime(curr_sec);
        } else {
          setInitTime(upTime);
        }
      }
    }, 1000);

    if (upTime - initTime <= 0) {
      clearTimeout(timeout);
    }
  }, [initTime]);

  const resetTimer = (updateTime: number) => {
    setUpTime(getSecondsFromDate(new Date()) + updateTime);
    setInitTime(getSecondsFromDate(new Date()));
  };

  return {timer: upTime - initTime, resetTimer};
};
