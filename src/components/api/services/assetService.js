import http from "../http";
import axios from "axios";

export const getFooterImage = async () => {
    let res = await http.get("/zarinpal")
    return res.data[0].img
}


export const getHomeImage = async () => {
    let res = await http.get("/programming")
    return res.data[0].img
}

export const getComments = async (page) => {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=12`)
    const totalCount = res.headers.get('x-total-count');
    return {
        data: res.data,
        total: Number(totalCount) // حتما عددش کن
    };
}