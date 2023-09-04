import axios from 'axios';
import useAxiosIntercept from '../../../hooks/useAxiosIntercept';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosIntercept();

  const { isLoading, error, data } = useQuery({
    queryKey: ['paymentHistory'],
    queryFn: async () => {
      const response = await axios.get(`/payhistory`);
      return response?.data;
    },
  });

  console.log(data);

  return (
    <div className='h-full w-full'>
      <div className='w-[100%] bg-white shadow-lg rounded-sm border border-gray-200'>
        <header className='px-5 py-4 border-b border-gray-100'>
          <h2 className='font-bold text-xl text-gray-800 capitalize'>
            payment history
          </h2>
        </header>
        <div className='p-3'>
          <div className='overflow-x-auto'>
            <table className='table-auto w-full'>
              <thead className='text-sm font-semibold uppercase text-gray-500 bg-[#FFF2CC]'>
                <tr>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>
                      payment history 1
                    </div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>
                      payment history 2
                    </div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>
                      payment history 3
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm divide-y divide-gray-100'>
                <tr>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='text-left text-sm'>payment history 1</div>
                  </td>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='text-left text-sm'>payment history 2</div>
                  </td>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='text-left font-medium text-green-500'>
                      payment history 3
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
