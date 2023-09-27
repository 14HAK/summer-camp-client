import { useContext } from 'react';
import { MyContext } from '../context/ContextPassData';

import useAxiosIntercept from './useAxiosIntercept';

const useGetSingleCourse = () => {
  const { user, setCourseData } = useContext(MyContext);
  // console.log(user);

  const [axiosSecure] = useAxiosIntercept();

  const fetchSingleCourse = async (id) => {
    await user;
    const res = await axiosSecure.get(
      `/course/details${id}?email=${user?.email}`
    );
    setCourseData(res?.data);
  };

  return [fetchSingleCourse];
};
//
export default useGetSingleCourse;
