import React from "react";
import Flag from "react-world-flags";

const exchangeRates = [
    { code: "USD", country: "us", value: "16,202.10" },
    { code: "GBP", country: "gb", value: "22,269.08" },
];

const buyRates = [
    { code: "HKD", country: "hk", value: "2,072.36" },
    { code: "CNY", country: "cn", value: "2,227.14" },
];

export default function ExchangeRate() {
    return (
        <div className="bg-amber-600 text-white p-3 w-full rounded-md shadow-md text-sm overflow-y-auto max-h-[200px]">
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold uppercase text-base">Info Nilai Tukar Valas</h2>
                {/* <p className="text-xs text-right italic text-gray-300">
          * Last Update: 02 Juli 2025
        </p> */}
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                    {exchangeRates.map(({ code, country, value }) => (
                        <div
                            key={code}
                            className="flex justify-between bg-black px-3 py-2 rounded text-white items-center"
                        >
                            <span className="text-lg font-semibold flex items-center gap-2">
                                <Flag code={country.toUpperCase()} style={{ width: 24, height: 16 }} />
                                {code}
                            </span>
                            <span className="text-lg font-semibold">{value}</span>
                        </div>
                    ))}
                </div>
                <div className="space-y-1">
                    {buyRates.map(({ code, country, value }) => (
                        <div
                            key={code}
                            className="flex justify-between bg-black px-3 py-2 rounded text-white items-center"
                        >
                            <span className="text-lg font-semibold flex items-center gap-2">
                                <Flag code={country.toUpperCase()} style={{ width: 24, height: 16 }} />
                                {code}
                            </span>
                            <span className="text-lg font-semibold">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
