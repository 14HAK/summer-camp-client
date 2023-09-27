import useAxiosIntercept from './useAxiosIntercept';
import Swal from 'sweetalert2';

const usePostCourse = () => {
  const [axiosSecure] = useAxiosIntercept();
  const postCourse = async (data, userEmail) => {
    const res = await axiosSecure.post(`/rawcourse?email=${userEmail}`, {
      ...data,
    });
    if (res?.data?.acknowledged) {
      Swal.fire({
        position: 'top-bottom',
        icon: 'success',
        title: 'Course Add Successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return [postCourse];
};
//
export default usePostCourse;
