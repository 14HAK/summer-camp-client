import { useContext } from 'react';
import useAxiosIntercept from './useAxiosIntercept';
import { MyContext } from '../context/ContextPassData';
import Swal from 'sweetalert2';

const useAddCart = () => {
  const { user } = useContext(MyContext);
  // console.log(user);
  const [axiosSecure] = useAxiosIntercept();
  const postCourse = async (data) => {
    const res = await axiosSecure.post(`/addcart?email=${user?.email}`, {
      ...data,
      email: user?.email,
    });
    if (res?.data?.acknowledged) {
      Swal.fire({
        position: 'top-bottom',
        icon: 'success',
        title: 'Add to Cart!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    //
    // console.log(res?.data);
  };

  return [postCourse];
};

export default useAddCart;
