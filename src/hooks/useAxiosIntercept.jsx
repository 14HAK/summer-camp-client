import axios from 'axios';

const useAxiosIntercept = () => {
  //
  const axiosSecure = axios.create({
    baseURL: 'https://summer-camp-server-omega-five.vercel.app/',
  });
  //
  // Request interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken');
      // console.log(token);
      if (token) {
        config.headers[`authorization`] = `bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  //
  // Response interceptor
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // Handle unauthorized access, e.g., redirect to login page
        // or clear token from localStorage
        console.log('error 401');
      }
      return Promise.reject(error);
    }
  );

  return [axiosSecure];
};

export default useAxiosIntercept;
