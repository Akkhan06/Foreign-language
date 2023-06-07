import React from 'react';

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;