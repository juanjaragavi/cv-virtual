import React from "react";
import { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => {
        clearInterval(intervalId);
        };
    }, []);

    const hour = time.getHours().toString().padStart(2, "0");
    const minute = time.getMinutes().toString().padStart(2, "0");
    const second = time.getSeconds().toString().padStart(2, "0");

    return (
        <div className="group mt-4 rounded-xl border border-white bg-gray-900 px-6 pb-2 pt-3 hover:border-pink-500 transiciones">
        <div className="spartan clock-text text-4xl font-bold text-white group-hover:text-pink-500 transiciones">
            {hour}:{minute}:<span>{second}</span>
        </div>
        </div>
    );
};

export default Clock;
