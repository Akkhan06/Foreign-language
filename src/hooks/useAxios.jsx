import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
const axiosSe = axios.create({
  baseURL: 'https://foreign-language-akkhan06.vercel.app', 
});

const useAxios = () => {
  const { logOut } = useAuth(); 
  const navigate = useNavigate(); 

  
  useEffect(() => {
    axiosSe.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSe.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {

        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSe];
};

export default useAxios;
