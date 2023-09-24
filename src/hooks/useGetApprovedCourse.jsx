import { useQuery } from '@tanstack/react-query';
import useAxiosIntercept from './useAxiosIntercept';

const useGetApprovedCourse = () => {
  const [axiosSecure] = useAxiosIntercept();
  const { isLoading, error, data } = useQuery({
    queryKey: ['uiCourses'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/courses`);
      return res?.data;
    },
  });

  return [isLoading, error, data];
};

export default useGetApprovedCourse;
