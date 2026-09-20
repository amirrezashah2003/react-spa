import http from "../http.js"

export const getArticles = async () => {
    let res = await http.get("/blogs")
    return res.data
}

export const getArticle = async (articleId) => {
    let res = await http.get(`/blogs/${articleId}`)
    return res.data
}

export const addArticle = async (newArticleData) => {
    let res = await http.post("/blogs", newArticleData)
    return res.data
}

export const deleteArticle = async (articleId) => {
    let res = await http.delete(`/blogs/${articleId}`)
    return res.data
}

export const editArticle = async (articleId , newArticleData) => {
    let res = await http.put(`/blogs/${articleId}` , newArticleData)
    return res.data
}
