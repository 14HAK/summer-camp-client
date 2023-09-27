import { useContext } from 'react';
import { MyContext } from '../context/ContextPassData';
import { useQuery } from '@tanstack/react-query';
import useAxiosIntercept from './useAxiosIntercept';
const useGetInstructors = () => {
  const { user } = useContext(MyContext);
  const [axiosSecure] = useAxiosIntercept();
  const { isLoading, error, data } = useQuery({
    queryKey: ['uiCourses'],
    queryFn: async () => {
      await user;
      const res = await axiosSecure.get(`/instructors?email=${user?.email}`);
      return res?.data;
    },
  });

  return [isLoading, error, data];
  //
};

export default useGetInstructors;
