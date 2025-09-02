// src/components/sections/Countdown.tsx
"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
  // 1. Initialize with a default, non-dynamic state.
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 2. This runs ONLY on the client, after the initial render.
    setIsClient(true);

    const calculateTimeLeft = () => {
      const difference = +new Date("2025-09-17T09:00:00") - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Set the initial time as soon as the client loads
    setTimeLeft(calculateTimeLeft());

    // Then, set up the interval to update it every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div key={interval} className="text-center">
      <div className="text-4xl md:text-6xl font-mono font-bold text-primary p-4 bg-dark-card/50 rounded-lg backdrop-blur-sm">
        {/* 3. On the server and initial client render, show '00' to prevent mismatch.
                    Once the client has mounted, show the real time. */}
        {isClient
          ? String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, "0")
          : "00"}
      </div>
      <div className="text-sm md:text-lg uppercase mt-2 tracking-widest">
        {interval}
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8">{timerComponents}</div>
  );
};

export default Countdown;
