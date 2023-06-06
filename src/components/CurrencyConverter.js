import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrencyConverter = () => {
    const [usdValue, setUsdValue] = useState("");
    const [copValue, setCopValue] = useState("");
    const [usdRate, setUsdRate] = useState("");
    const [copRate, setCopRate] = useState("");

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios.get(
            "https://api.exchangerate-api.com/v4/latest/USD"
        );
        setUsdRate(result.data.rates.COP.toFixed(2));
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios.get(
            "https://api.exchangerate-api.com/v4/latest/COP"
        );
        setCopRate(result.data.rates.USD.toFixed(2));
        };
        fetchData();
    }, []);

    const handleUsdChange = (event) => {
        const usdInput = event.target.value;
        setUsdValue(usdInput);
        setCopValue((usdInput * usdRate).toFixed(2));
    };

    const handleCopChange = (event) => {
        const copInput = event.target.value;
        setCopValue(copInput);
        setUsdValue((copInput * copRate).toFixed(2));
    };

    return (
        <div className="group w-full border border-white hover:border-pink-500 rounded-xl bg-gray-900 p-6 text-white transiciones">
            <h2 className="text-white group-hover:text-pink-500 spartan mb-4 text-center text-2xl font-bold transiciones">
                Currency Converter
            </h2>
            <div className="flex items-center justify-between">
                <div>
                <input
                    type="text"
                    placeholder="🇺🇸 USD"
                    value={usdValue}
                    onChange={handleUsdChange}
                    className="spartan w-32 rounded-md border border-white hover:border-pink-500 bg-gray-900 px-2 pt-2 pb-1 text-left text-white transiciones"
                />
                </div>
                <div>
                <input
                    type="text"
                    placeholder="🇨🇴 COP"
                    value={copValue}
                    onChange={handleCopChange}
                    className="spartan w-32 rounded-md border border-white hover:border-pink-500 bg-gray-900 px-2 pt-2 pb-1 text-left text-white transiciones"
                />
                </div>
            </div>
            <div className="text-center spartan-light mt-4 text-xs text-gray-500">
                Exchange rates fetched from <a href="https://exchangerate-api.com" target="_blank" rel="noreferrer">exchangerate-api.com</a>
            </div>
        </div>
    );
};

export default CurrencyConverter;
