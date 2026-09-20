import { useQuery } from "@tanstack/react-query"
import { getUsers , getUser } from "../../api/services/usersService"
export const useUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: getUsers
    })
}

export const useUser = (userId) => {
    return useQuery({
        queryKey: ["users" , userId],
        queryFn: () => getUser(userId)
    })
}