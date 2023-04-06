import React from "react";
import moment from "moment";
import "moment/locale/en-gb"; // set the calendar to use English (UK) format 

const Calendar = () => {
  // get the current date
    const currentDate = moment();

    // get the first day of the current month
    const firstDayOfMonth = moment(currentDate).startOf("month");

    // get the number of days in the current month
    const numberOfDaysInMonth = moment(currentDate).daysInMonth();

    // create an array of weekdays to use as column headers
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // create an array of days in the current month
    const daysInMonth = Array(numberOfDaysInMonth)
        .fill(0)
        .map((_, index) => moment(firstDayOfMonth).add(index, "days"));

    return (
        <div className="spartan mt-4 flex flex-col items-center">
        {/* calendar header */}
        <div className="spartan-bold text-white text-xl mb-4">{currentDate.format("MMMM YYYY")}</div>

        {/* calendar */}
        <div className="spartan grid grid-cols-7 gap-4 text-white">
            {/* column headers */}
            {weekdays.map((weekday) => (
            <div key={weekday} className="spartan border-b-2 border-white">
                {weekday}
            </div>
            ))}

            {/* days in month */}
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
