/* eslint-disable no-eval */
import React from "react";
import { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        setResult(result + value);
    };

    const handleCalculate = () => {
        setResult(eval(result));
    };

    const handleClear = () => {
        setResult('');
    };

    return (
        <div className="bg-gray-900 rounded-xl p-4 my-8 border border-white hover:border-pink-500">
        <div className="spartan text-white text-4xl mb-4">{result || 0}</div>
        <div className="grid grid-cols-4 gap-2">
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('7')}>7</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('8')}>8</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('9')}>9</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('/')}>/</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('4')}>4</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('5')}>5</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('6')}>6</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('*')}>*</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('1')}>1</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('2')}>2</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('3')}>3</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('-')}>-</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('0')}>0</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('.')}>.</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleCalculate()}>=</button>
            <button className="spartan border-pink-500 rounded-xl border-1 p-2 text-white" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <button className="w-full spartan-bold mt-4 bg-pink-500 rounded-full px-4 py-2 text-white" onClick={() => handleClear()}>Borrar</button>
        </div>
    );
};

export default Calculator;
