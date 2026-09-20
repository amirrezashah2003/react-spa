import { useQuery } from "@tanstack/react-query"
import { getCourses , getCourse } from "../../api/services/courseService"

export const useCourses = () => {
    return useQuery({
        queryKey: ["courses"],
        queryFn: getCourses,
        staleTime: 1000 * 60,
        gcTime: 1000 * 60 * 5
    })
}


export const useCourse = (courseId) => {
    return useQuery({
        queryKey: ["courses" , courseId],
        queryFn: () =>  getCourse(courseId),
        staleTime: 1000 * 60,
        gcTime: 1000 * 60 * 5,
        enabled: !!courseId
    })
}