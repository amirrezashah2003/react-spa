import { useQuery } from "@tanstack/react-query"
import { getArticle , getArticles } from "../../api/services/blogService"

export const useArticles = () => {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: getArticles,
        staleTime: 1000 * 60,
        gcTime: 1000 * 60 * 5 
    })
}

export const useArticle = (articleId) => {
    return useQuery({
        queryKey: ["blogs" , articleId],
        queryFn: () =>  getArticle(articleId),
        enabled: !!articleId, // فقط اگر ID وجود داشت درخواست بزن
    })
}