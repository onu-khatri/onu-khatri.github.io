import { useEffect, useState } from "react";

type Timer = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimer = (date: string): Timer => {
  const past = Date.parse(date);
  const now = Date.now();
  const diff = now - past;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor(diff / 1000);

  return {
    years,
    months: months - years * 12,
    days: days - months * 30,
    hours: hours - days * 24,
    minutes: minutes - hours * 60,
    seconds: seconds - minutes * 60,
  };
};

export const ExperienceTimer = ({
  careerStartDate,
}: {
  careerStartDate: string;
}) => {
  const [timer, setTimer] = useState<Timer>(calculateTimer(careerStartDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(calculateTimer(careerStartDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnitClass =
    "inline-block min-w-[40px] text-sm sm:min-w-[33px] sm:text-base";
  const labelClass = "block text-xs sm:text-sm font-normal leading-[1.4em]";

  return (
    <div>
      <div className="block text-center">
        <span className="pb-[5px] drop-shadow-[0_0_10px_#48C8FF] block">
          Since: Nov 2013
        </span>
      </div>
      {[
        { value: timer.years, label: "years" },
        { value: timer.months, label: "months" },
        { value: timer.days, label: "days" },
        { value: timer.hours, label: "hours" },
        { value: timer.minutes, label: "min" },
        { value: timer.seconds, label: "sec" },
      ].map((unit) => (
        <div key={unit.label} className={timeUnitClass}>
          {unit.value}
          <span className={labelClass}>{unit.label}</span>
        </div>
      ))}
    </div>
  );
};
