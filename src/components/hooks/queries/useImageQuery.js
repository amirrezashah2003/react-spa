import { useQuery , keepPreviousData  } from "@tanstack/react-query"
import { getHomeImage , getFooterImage , getComments} from "../../api/services/assetService.js"

export const useHomeImage = () => {
    return useQuery({
        queryKey: ["assets", "home-image"],
        queryFn: getHomeImage,
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60 * 3
    })
} 


export const useFooterImage = () => {
    return useQuery({
        queryKey: ["assets", "footer-image"],
        queryFn: getFooterImage,
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60 * 3
    })
}



export const useComments = (page) => {
    return useQuery({
        queryKey: ["comments" , page],
        queryFn: () => getComments(page),
        staleTime: 1000 * 60 * 2,
        gcTime: 1000 * 60 * 5,
        placeholderData: keepPreviousData, // برای جلوگیری از پرش تصویر هنگام تغییر صفحه
    })
}