// import React, { MouseEvent, useState } from "react";
// import { Weekday, Date } from "../types/types";
// import { Weekdays } from "../configs/Weekdays";
// import { monthDates } from "../configs/MonthDays";
// import ImageLA  from '../assets/ImageLA.svg';
// import ImageRA from '../assets/ImageRA.svg';

  

// export const Calendar: React.FC<{}> = ({}) => {

//     const [selectedDate, setSelectedDate] = useState<string | null>();

//     const handleChange = (e: MouseEvent<HTMLButtonElement>) => {
//         setSelectedDate(e.currentTarget.getAttribute('value'));
//     }

//     const generateDates = (date: number) => {
//         let selectedDateNumber: number = selectedDate ? parseInt(selectedDate) : 0;
//         for (let i = 0; i < 7; i++) {
//             return <button className={`date ${date == 1 ? "today": ""} ${date == selectedDateNumber ? "selected" : ""}`} onClick={handleChange} value={date}><p>{date}</p></button>
//         }
//     }

//     const generateWeeks = (dates: Array<Date>) => {
//         let daysInWeek = 7;
//         let tempArray = [];

//         for (let i = 0; i < dates.length; i += daysInWeek) {
//             tempArray.push(dates.slice(i, i + daysInWeek));
//         }

//         return tempArray;
//     }

//     return (
//         <div className="calendar-container">
//             <div className="datepicker-container">
//                 <img className="icon" src={ImageLA} />
//                 <span className="between-icons">June 2024</span>
//                 <img className="icon" src={ImageRA} />
//             </div>

//             <div className="weekdays-container">
//                 {Weekdays.map( day => (
//                     <div className="week-day">{day}</div>
//                 ))}
//             </div>

//             <div className="calendar">
//                 {generateWeeks(monthDates).map(week => (
//                     <div className="week">
//                         {week.map(day => (generateDates(day.day)))}
//                     </div>
//                 ))
//                 }
//             </div>
//         </div>
            
//     )
// }