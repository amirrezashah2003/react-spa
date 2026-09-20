import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000", // اینجا فقط یکبار آدرس را می‌نویسی
});

export default http;
