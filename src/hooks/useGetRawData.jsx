import { useContext } from 'react';
import { MyContext } from '../context/ContextPassData';
import { useQuery } from '@tanstack/react-query';
import useAxiosIntercept from './useAxiosIntercept';

const useGetRawData = () => {
  const { user } = useContext(MyContext);
  const [axiosSecure] = useAxiosIntercept();
  const { refetch, isLoading, error, data } = useQuery({
    queryKey: ['adminRawData'],
    queryFn: async () => {
      await user;
      const res = await axiosSecure.get(`/managecourse?email=${user?.email}`);
      return res?.data;
    },
  });

  return [refetch, isLoading, error, data];
};
//
export default useGetRawData;
