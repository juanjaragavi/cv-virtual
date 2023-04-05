/* eslint-disable no-eval */
import React from "react";
import { useState } from "react";

const Calculator = () => {
    const [result, setResult] = useState("");

    const handleButtonClick = (value) => {
        setResult(result + value);
    };

    function handleCalculate() {
        setResult(eval(result));
    }

    const handleClear = () => {
        setResult("");
    };

    return (
        <div className="group border border-white hover:border-pink-500 rounded-xl bg-gray-900 p-4 transiciones">
            <div className="spartan mb-3 text-4xl text-white group-hover:text-pink-500 transiciones">{result || 0}</div>
            <div className="grid grid-cols-4 gap-2">
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("7")}
                >
                7
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("8")}
                >
                8
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("9")}
                >
                9
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("/")}
                >
                /
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("4")}
                >
                4
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("5")}
                >
                5
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("6")}
                >
                6
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("*")}
                >
                *
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("1")}
                >
                1
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("2")}
                >
                2
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("3")}
                >
                3
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("-")}
                >
                -
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("0")}
                >
                0
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick(".")}
                >
                .
                </button>
                <button
                className="spartan p-2 text-pink-500 hover:underline hover:underline-offset-2 transiciones"
                onClick={handleClear}
                >
                C
                </button>
                <button
                className="spartan p-2 text-white hover:text-pink-500 transiciones"
                onClick={() => handleButtonClick("+")}
                >
                +
                </button>
                <button
                className="spartan-bold col-span-1 rounded-full bg-pink-500 px-3 pb-1 pt-1.5 text-white border border-pink-500 hover:border hover:border-white transiciones"
                onClick={handleCalculate}
                >
                =
                </button>
            </div>
        </div>
    );
};

export default Calculator;
