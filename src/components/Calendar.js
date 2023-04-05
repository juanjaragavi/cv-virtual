import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import 'tailwindcss/tailwind.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = eachDayOfInterval({
        start: startOfMonth(currentDate),
        end: endOfMonth(currentDate)
    });

    const monthName = format(currentDate, 'MMMM yyyy');

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <div className="group spartan mt-4 rounded-xl border border-white hover:border-pink-500 bg-gray-900 text-white py-6 px-4 transiciones">
            <div className="flex justify-between mb-6">
                <button className="text-white hover:text-pink-500 hover:underline hover:underline-offset-2 font-bold transiciones" onClick={prevMonth}>
                Prev
                </button>
                <h2 className="text-white group-hover:text-pink-500 spartan-bold text-lg transiciones">{monthName}</h2>
                <button className="text-white hover:text-pink-500 hover:underline hover:underline-offset-2 font-bold transiciones" onClick={nextMonth}>
                Next
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2">
                <div className="text-center">Sun</div>
                <div className="text-center">Mon</div>
                <div className="text-center">Tue</div>
                <div className="text-center">Wed</div>
                <div className="text-center">Thu</div>
                <div className="text-center">Fri</div>
                <div className="text-center">Sat</div>
                {daysInMonth.map((day, index) => (
                <div key={index} className="text-center">
                    {format(day, 'd')}
                </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
