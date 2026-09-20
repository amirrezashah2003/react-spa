import axios from "axios";
import { use, useEffect, useState } from "react";

function useFetch(url){
    const [data , setData] = useState(null)
    const [error , setError] = useState(null)
    const [loading , setLoading] = useState(true)

    useEffect( () => {
        // برای کنسل کردن درخواست وقتی از صفحه به صفحه دیگر میریم
        const controller = new AbortController()

        const fetch = async () => {
            try{
                const res = await axios.get(url)
                setData(res.data)
                setLoading(false)
            }
            catch{
                setError("خطا در دریافت اطلاعات")
                setLoading(false)
            }
        } 
        fetch()

        return () => controller.abort()

    }, [url])

    return {data , error , loading}
}
export default useFetch