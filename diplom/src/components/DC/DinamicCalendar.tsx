import { useState, useEffect } from "react";

const DinamicCalendar = () => {
    const [date, setDate] = useState(new Date());

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const updateCalendar = () => {
            setDate(new Date());
        };

        const interval = setInterval(updateCalendar, 1000 * 60 * 60 * 24);
        return () => clearInterval(interval);
    }, []);

    const handleDayClick = (day) => {
        setDate(day);
    };

    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    return (
        <div>
            <div className="calendar-header">
                <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}>&lt;</button>
                <div>{date.toLocaleString("default", { month: "long", year: "numeric"})}</div>
                <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}>&gt;</button>
            </div>
            <div className="calendar-body">
                <div className="calendar-weekdays">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (<div key={day}>{day}</div>))}
                </div>
                <div className="calendar-days">
                    {Array.from(getDaysInMonth(date)).map((day) => (
                        <div key={day} className={day === date.getDate() ? "calendar-day-delected" : "calendar-day"} onClick={() =>
                        handleDayClick(day)}>{day}</div>
                    ))}
                </div>
            </div>

            <button onClick={() => setEvents([...events, "Новое событие"])}>Добавить событие</button>
        </div>
    );
};

export default DinamicCalendar;