import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    if (difference <= 0) return null;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  if (!timeLeft) {
    return <span>The bootcamp has started!</span>;
  }

  return (
    <div>
      <div className=" text-black font-bold text-3xl py-1 px-3 rounded-full inline-block mb-4">
        TIME LEFT UNTILL THE BOOTCAMP STARTS :
      </div>
      <div className="flex justify-center items-center pb-5 space-x-10 text-yellow-400 text-2 font-bold">
        <div className="text-center">
          <div>{timeLeft.days}</div>
          <div className="text-black text-3xl mt-1">Days</div>
        </div>
        <div className="text-center">
          <div>{timeLeft.hours}</div>
          <div className="text-black text-3xl mt-1">Hours</div>
        </div>
        <div className="text-center">
          <div>{timeLeft.minutes}</div>
          <div className="text-black text-3xl mt-1">Minutes</div>
        </div>
        <div className="text-center">
          <div>{timeLeft.seconds}</div>
          <div className="text-black text-3 xl mt-1">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
