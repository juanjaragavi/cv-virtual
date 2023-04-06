import React from "react";
import moment from "moment";
import "moment/locale/en-gb";

const Calendar = () => {
    const currentDate = moment();
    const firstDayOfMonth = moment(currentDate).startOf("month");
    const numberOfDaysInMonth = moment(currentDate).daysInMonth();
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const daysInMonth = Array(numberOfDaysInMonth)
        .fill(0)
        .map((_, index) => moment(firstDayOfMonth).add(index, "days"));

    return (
        <div className="spartan mt-4 flex flex-col items-center">
        <div className="spartan-bold text-white text-xl mb-4">{currentDate.format("MMMM YYYY")}</div>

        <div className="spartan grid grid-cols-7 gap-4 text-white">
            {weekdays.map((weekday) => (
            <div key={weekday} className="spartan border-b-2 border-white">
                {weekday}
            </div>
            ))}

            {daysInMonth.map((day) => (
            <div
                key={day.format("D")}
                className={`${
                day.isSame(moment(), "day") ? "bg-pink-500" : ""
                } border border-white rounded-full flex justify-center items-center h-12 w-12`}
            >
                {day.format("D")}
            </div>
            ))}
        </div>
        </div>
    );
};

export default Calendar;
