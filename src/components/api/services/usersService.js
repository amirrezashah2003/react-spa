import http from "../http";

export const getUsers = async () => {
    let res = await http.get("/users")
    return res.data
}

export const getUser = async (userId) => {
    let res = await http.get(`/users/${userId}`)
    return res.data
}