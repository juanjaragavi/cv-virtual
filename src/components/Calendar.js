import React from "react";
import dayjs from "dayjs";
import _ from "lodash";

const Calendar = () => {
    const today = dayjs();
    const daysInMonth = today.daysInMonth();
    const firstDayOfMonth = today.startOf("month").day();
    const monthDays = _.range(-(firstDayOfMonth - 1), daysInMonth + 1);

    return (
        <div className="w-full group spartan bg-gray-900 text-white p-4 rounded-xl border border-white hover:border-pink-500 transiciones">
        <div className="flex justify-between items-center mb-4">
            <button className="rounded-xl px-2 pt-1.5 pb-1.5 hover:bg-pink-500 focus:outline-none transiciones">
            &lt;
            </button>
            <div className="text-white group-hover:text-pink-500 text-lg font-bold transiciones">
            {today.format("MMMM YYYY")}
            </div>
            <button className="rounded-xl px-2 pt-1.5 pb-1.5 hover:bg-pink-500 focus:outline-none transiciones">
            &gt;
            </button>
        </div>
        <div className="grid grid-cols-7 gap-1">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div key={day} className="font-bold">
                {day}
            </div>
            ))}
            {monthDays.map((day) => {
            const isToday = today.date() === day;
            const isDayOfMonth = day > 0 && day <= daysInMonth;
            const classNames = [
                "pl-2.5",
                "pt-1",
                "rounded-full",
                "transiciones",
                isToday ? "bg-pink-500 text-pink-500" : "",
                isDayOfMonth ? "hover:bg-pink-500 cursor-pointer text-white" : "",
            ].join(" ");

            return (
                <div key={day} className={classNames}>
                {isDayOfMonth ? day : ""}
                </div>
            );
            })}
        </div>
        </div>
    );
};

export default Calendar;
