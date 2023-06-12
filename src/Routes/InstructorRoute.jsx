import useAuth from '../hooks/useAuth';
import useInstructor from '../hooks/useInstructor';
import { useLocation } from 'react-router-dom';


const InstructorRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstrcutorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstrcutorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;