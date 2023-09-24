import { useContext } from 'react';
import { MyContext } from '../context/ContextPassData';
import useAxiosIntercept from './useAxiosIntercept';
import { useQuery } from '@tanstack/react-query';

const useFetchCartData = () => {
  const { user } = useContext(MyContext);
  const [axiosSecure] = useAxiosIntercept();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cartData'],
    queryFn: async () => {
      await user;
      const response = await axiosSecure.get(`/cart?email=${user?.email}`);
      return response?.data;
    },
  });

  return [refetch, cart];
};

export default useFetchCartData;
