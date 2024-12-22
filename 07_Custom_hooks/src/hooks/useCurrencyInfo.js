import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(`https://v6.exchangerate-api.com/v6/b180901da83a647d0895036b/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res["conversion_rates"]))
    }, [currency])
    console.log(data);
    return data
}

export {useCurrencyInfo};