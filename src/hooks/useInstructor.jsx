import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useInstructor = () => {
    const {user} = useAuth();
    const [axiosSe] = useAxios();
    const {data: isInstructor, isLoading: isInstrcutorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSe.get(`/user/instructor/${user?.email}`);
            console.log('is admin response', res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstrcutorLoading]
};

export default useInstructor;