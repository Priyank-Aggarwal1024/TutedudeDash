// import { useState, useEffect } from "react";
// import "../assets/styles/Streak.css";
// import { DropDownSvg2, LeftArrowSvg, RightArrowSvg, streak } from "@/assets";

// const tempStreakData = {
//   streakDays: [
//     "2025-04-03",
//     "2025-04-04",
//     "2025-04-05",
//     "2025-04-06",
//     "2025-04-07",
//     "2025-04-08",
//     "2025-04-09",
//     "2025-04-10",
//   ],
// };

// const Streak = ({ complete }) => {
//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());
//   const [daysArray, setDaysArray] = useState([]);

//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const getDaysInMonth = (month, year) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getFirstDayOfMonth = (month, year) => {
//     return new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.
//   };

//   const formatDate = (year, month, day) => {
//     const monthStr = (month + 1).toString().padStart(2, "0");
//     const dayStr = day.toString().padStart(2, "0");
//     return `${year}-${monthStr}-${dayStr}`;
//   };

//   useEffect(() => {
//     const daysInMonth = getDaysInMonth(currentMonth, currentYear);
//     const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
//     const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
//     const emptyDays = Array(
//       firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1
//     ).fill(null);
//     setDaysArray([...emptyDays, ...days]);
//   }, [currentMonth, currentYear]);

//   const handlePrevMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear((prev) => prev - 1);
//     } else {
//       setCurrentMonth((prev) => prev - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear((prev) => prev + 1);
//     } else {
//       setCurrentMonth((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="st-container">
//       <div className="st-top-cards">
//         <div className="st-card st-card-learning">
//           <div className="st-card-header">
//             <img src={streak} alt="Streak" />
//             <span className="st-card-title">Learning Streak!</span>
//           </div>
//           <div className="st-card-body">
//             <span className="st-days">
//               12 <span className="st-days-text">Days</span>
//             </span>
//             <DropDownSvg2 />
//           </div>
//         </div>

//         <div className="st-card st-card-longest">
//           <div className="st-card-header">
//             <span className="st-card-title">Longest Streak!</span>
//           </div>
//           <div className="st-card-body">
//             <span className="st-days">
//               4 <span className="st-days-text">Days</span>
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="st-calendar">
//         {complete && (
//           <div className="st-calendar-header">
//             <LeftArrowSvg onClick={handlePrevMonth} className="st-prev" />
//             <span className="st-month">{monthNames[currentMonth]}</span>
//             <RightArrowSvg onClick={handleNextMonth} className="st-next" />
//           </div>
//         )}

//         <div className="st-weekdays">
//           {["S", "M", "T", "W", "T", "F", "S"].map((day, ind) => (
//             <div className="st-day-main" key={`day-${ind}`}>
//               <span className="st-weekday">{day}</span>
//             </div>
//           ))}
//         </div>

//         <div className="st-days-grid">
//           {daysArray.map((day, ind) => {
//             const fullDate = day
//               ? formatDate(currentYear, currentMonth, day)
//               : null;
//             const isHighlighted =
//               day && tempStreakData.streakDays.includes(fullDate);
//             const isFirstStreak =
//               isHighlighted &&
//               tempStreakData.streakDays.indexOf(fullDate) === 0;
//             const isLastStreak =
//               isHighlighted &&
//               tempStreakData.streakDays.indexOf(fullDate) ===
//                 tempStreakData.streakDays.length - 1;
//             const isToday =
//               day === today.getDate() &&
//               currentMonth === today.getMonth() &&
//               currentYear === today.getFullYear();

//             return (
//               <div
//                 className={`st-day-main ${
//                   isHighlighted
//                     ? isLastStreak
//                       ? "st-main-highlight st-main-last"
//                       : isFirstStreak
//                       ? "st-main-highlight st-main-start"
//                       : "st-main-highlight"
//                     : ""
//                 }`}
//                 key={`day-${ind}`}
//               >
//                 <span
//                   className={`st-day ${isHighlighted ? "st-highlight" : ""} ${
//                     day === null ? "st-empty" : ""
//                   } ${isToday ? "st-today" : ""}`}
//                 >
//                   {day}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Streak;

import { useState, useEffect } from "react";
import "../assets/styles/Streak.css";
import {
  DropDownSvg2,
  LeftArrowSvg,
  RightArrowSvg,
  RightSvg,
  streak,
} from "@/assets";

const tempStreakData = {
  streakDays: ["2025-04-21", "2025-04-22", "2025-04-23", "2025-04-24"],
};

const Streak = ({ complete }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [daysArray, setDaysArray] = useState([]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.
  };

  const formatDate = (year, month, day) => {
    const monthStr = (month + 1).toString().padStart(2, "0");
    const dayStr = day.toString().padStart(2, "0");
    return `${year}-${monthStr}-${dayStr}`;
  };

  useEffect(() => {
    const getWeekDays = () => {
      const currentDate = new Date(currentYear, currentMonth, today.getDate());
      const currentDayOfWeek = currentDate.getDay(); // 0 for Sunday, 6 for Saturday
      const startOfWeekDate = new Date(currentDate);
      startOfWeekDate.setDate(currentDate.getDate() - currentDayOfWeek);
      const weekDays = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeekDate);
        date.setDate(startOfWeekDate.getDate() + i);
        weekDays.push(date.getDate());
      }
      return weekDays;
    };

    const getMonthDays = () => {
      const daysInMonth = getDaysInMonth(currentMonth, currentYear);
      const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
      const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
      const emptyDays = Array(
        firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1
      ).fill(null);
      return [...emptyDays, ...days];
    };

    setDaysArray(complete ? getMonthDays() : getWeekDays());
  }, [currentMonth, currentYear, complete]);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const renderCalendarHeader = () => (
    <div className="st-calendar-header">
      <LeftArrowSvg onClick={handlePrevMonth} className="st-prev" />
      <span className="st-month">{monthNames[currentMonth]}</span>
      <RightArrowSvg onClick={handleNextMonth} className="st-next" />
    </div>
  );

  return (
    <div className="st-container">
      <div className="st-top-cards">
        <div className="st-card st-card-learning">
          <div className="st-card-header">
            <img src={streak} alt="Streak" />
            <span className="st-card-title">Learning Streak!</span>
          </div>
          <div className="st-card-body">
            <span className="st-days">
              12 <span className="st-days-text">Days</span>
            </span>
            <DropDownSvg2 />
          </div>
        </div>

        <div className="st-card st-card-longest">
          <div className="st-card-header">
            <span className="st-card-title">Longest Streak!</span>
          </div>
          <div className="st-card-body">
            <span className="st-days">
              4 <span className="st-days-text">Days</span>
            </span>
          </div>
        </div>
      </div>

      <div className="st-calendar">
        {complete && renderCalendarHeader()}

        <div className="st-weekdays">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, ind) => (
            <div className="st-day-main" key={`day-${ind}`}>
              <span className="st-weekday">{day}</span>
            </div>
          ))}
        </div>

        <div className="st-days-grid">
          {daysArray.map((day, ind) => {
            const displayDay = day !== null ? day : "";
            const fullDate = displayDay
              ? formatDate(currentYear, currentMonth, displayDay)
              : null;
            const isHighlighted =
              displayDay && tempStreakData.streakDays.includes(fullDate);
            const isFirstStreak =
              isHighlighted &&
              tempStreakData.streakDays.indexOf(fullDate) === 0;
            const isLastStreak =
              isHighlighted &&
              tempStreakData.streakDays.indexOf(fullDate) ===
                tempStreakData.streakDays.length - 1;
            const isToday =
              displayDay === today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear();

            return (
              <div
                className={`st-day-main ${
                  isHighlighted && !complete
                    ? isLastStreak
                      ? "st-main-highlight st-main-last"
                      : isFirstStreak
                      ? "st-main-highlight st-main-start"
                      : "st-main-highlight"
                    : isHighlighted && complete
                    ? isLastStreak
                      ? "st-main-highlight st-main-last"
                      : isFirstStreak
                      ? "st-main-highlight st-main-start"
                      : "st-main-highlight"
                    : ""
                }`}
                key={`day-${ind}`}
              >
                <span
                  className={`st-day ${isHighlighted ? "st-highlight" : ""} ${
                    day === null ? "st-empty" : ""
                  } ${isToday ? "st-today" : ""}`}
                >
                  {complete ? displayDay : isHighlighted && <RightSvg />}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Streak;
