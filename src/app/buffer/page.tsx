"use client";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (): TimeLeft => {
  const difference = +new Date("2024-09-25") - +new Date();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

function Page() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="text-center bg-white bg-opacity-10 p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-4">Launching Soon!</h1>
        <p className="text-lg text-gray-300 mb-8">
          We are excited to see you being a part of this amazing Platform
        </p>
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-md border border-gray-400 flex items-center justify-center w-100 h-40">
            <div className="text-center mx-4">
              <span className="block text-4xl text-white font-bold">
                {timeLeft.days}
              </span>
              <span className="block text-gray-400">DAYS</span>
            </div>
            <div className="text-center mx-4">
              <span className="block text-4xl text-white font-bold">
                {timeLeft.hours}
              </span>
              <span className="block text-gray-400">HOURS</span>
            </div>
            <div className="text-center mx-4">
              <span className="block text-4xl text-white font-bold">
                {timeLeft.minutes}
              </span>
              <span className="block text-gray-400">MINUTES</span>
            </div>
            <div className="text-center mx-4">
              <span className="block text-4xl text-white font-bold">
                {timeLeft.seconds}
              </span>
              <span className="block text-gray-400">SECONDS</span>
            </div>
          </div>
        </div>
        <p className="text-gray-300 mb-6">
          We will notify you through an email when we Launch!
        </p>
        <p className="text-red-400 mb-6">^ Share With Friends ^</p>
        <p className="text-gray-300 mb-6">
          While we are offering the platform for free for now, it costs us our
          money, time and effort to keep this running. We highly appreciate your
          generous support to make this platform more robust and featuresome!
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300">
          Support Us
        </button>
      </div>
    </div>
  );
}

export default Page;
