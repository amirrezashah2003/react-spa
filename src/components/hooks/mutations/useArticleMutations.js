import {  useMutation, useQueryClient } from "@tanstack/react-query"
import { addArticle , deleteArticle , editArticle } from "../../api/services/blogService"


export const useCreateArticle = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (newArticleData) => addArticle(newArticleData),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["blogs"]})
        }
    })
}



export const useEdditArticle = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({id , data}) => editArticle(id , data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["blogs"]})
        }
    })
}



export const useDeleteArticle = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (articleId) => deleteArticle(articleId),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["blogs"]})
        }
    })
}