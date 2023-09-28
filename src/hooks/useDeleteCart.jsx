import { useContext } from 'react';
import useAxiosIntercept from './useAxiosIntercept';
import { MyContext } from '../context/ContextPassData';
import Swal from 'sweetalert2';
import useFetchCartData from './useFetchCartData';

const useDeleteCart = () => {
  const { user } = useContext(MyContext);
  const [refetch] = useFetchCartData();
  // console.log(user);
  const [axiosSecure] = useAxiosIntercept();
  const deleteCourse = async (id) => {
    console.log(user?.email, id);
    await user;
    const res = await axiosSecure.delete(`/delete/${id}`);
    if (res?.data?.acknowledged) {
      refetch();
      Swal.fire({
        position: 'top-bottom',
        icon: 'success',
        title: 'Item Deleted',
        showConfirmButton: false,
        timer: 1500,
      });
    }
    //
    // console.log(res?.data);
  };

  return [deleteCourse];
};

export default useDeleteCart;
