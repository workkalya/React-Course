import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState(null);
    useEffect(() => {
        const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
        fetch(url)
    .then((res) => res.json())
    .then((data) => {
        setData(data);
        console.log("Currency data fetched:", data);
    })
    .catch((err) => {
        console.error("Error fetching currency data:", err);
    });},[currency])
    return data;


}

export default useCurrencyInfo;