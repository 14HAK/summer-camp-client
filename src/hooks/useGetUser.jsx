import { useContext } from 'react';
import { MyContext } from '../context/ContextPassData';
import { useQuery } from '@tanstack/react-query';
import useAxiosIntercept from './useAxiosIntercept';

const useGetUser = () => {
  const { user } = useContext(MyContext);
  const [axiosSecure] = useAxiosIntercept();
  const { isLoading, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      await user;
      const res = await axiosSecure.get(`/alluser?email=${user?.email}`);
      return res?.data;
    },
  });

  return [isLoading, error, data];
};

export default useGetUser;
