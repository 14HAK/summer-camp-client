import { useContext } from 'react';
import { MyContext } from '../context/ContextPassData';
import useAxiosIntercept from './useAxiosIntercept';
import useGetRawData from './useGetRawData';

const useAdminApproved = () => {
  const { user } = useContext(MyContext);
  const [axiosSecure] = useAxiosIntercept();
  const [refetch] = useGetRawData();

  const approvedCourse = async (id, courseStatus) => {
    await user;
    const res = await axiosSecure.patch(
      `/course-approved/${courseStatus}?email=${user?.email}&id=${id}`
    );
    if (res?.data) {
      refetch();
    }
  };

  return [approvedCourse];
};

export default useAdminApproved;
