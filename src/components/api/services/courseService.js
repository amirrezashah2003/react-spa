import http from "../http";

export const getCourses = async () => {
    let res = await http.get("/courses")
    return res.data
}

export const getCourse = async (courseId) => {
    let res = await http.get(`/courses/${courseId}`)
    return res.data
}