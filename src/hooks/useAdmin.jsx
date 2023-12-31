import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useAdmin = () => {
    const {user} = useAuth();
    const [axiosSe] = useAxios();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSe.get(`/user/admin/${user?.email}`);
            console.log('is admin response', res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;