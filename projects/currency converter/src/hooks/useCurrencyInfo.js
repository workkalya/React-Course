import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState(null);
    useEffect(() => {
        const url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;
        fetch(url)
    .then((res) => res.json())
    .then((data) => {
        setData(data);
        console.log("Currency data fetched:", data);
    })
    .catch((err) => {
        console.error("Error fetching currency data:", err);
    });},[currency])
    return data[currency];


}

export default useCurrencyInfo;