import { useContext } from 'react';
import { MyContext } from '../context/ContextPassData';
import { useQuery } from '@tanstack/react-query';
import useAxiosIntercept from './useAxiosIntercept';

const useGetInstructorCourse = () => {
  const { user } = useContext(MyContext);
  const [axiosSecure] = useAxiosIntercept();
  const {
    isLoading,
    error,
    data: data = [],
  } = useQuery({
    queryKey: ['course'],
    queryFn: async () => {
      await user;
      const res = await axiosSecure.get(`/rawcourse?email=${user?.email}`);
      return res?.data;
    },
  });

  return [isLoading, error, data];
};

export default useGetInstructorCourse;
