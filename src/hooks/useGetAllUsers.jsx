import { useContext } from 'react';
import { MyContext } from '../context/ContextPassData';
import { useQuery } from '@tanstack/react-query';
import useAxiosIntercept from './useAxiosIntercept';

const useGetAllUsers = () => {
  const { user } = useContext(MyContext);
  const [axiosSecure] = useAxiosIntercept();

  const { isLoading, error, data } = useQuery({
    queryKey: ['adminUsers'],
    queryFn: async () => {
      await user;
      const res = await axiosSecure.get(`/manageUser?email=${user?.email}`);
      return res?.data;
    },
  });

  return [isLoading, error, data];
};

export default useGetAllUsers;
