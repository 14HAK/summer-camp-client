import { FaCreditCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useFetchCartData from '../../../hooks/useFetchCartData';
import Loading from '../../loader/Loading';
import NotFound from '../../404/NotFound';

const MyCart = () => {
  const [, cart, isLoading, isError] = useFetchCartData();

  const totalPrice = cart.reduce(
    (pre, cur) => pre + parseInt(cur?.coursePrice),
    0
  );

  if (isLoading) return <Loading></Loading>;
  if (isError) return <NotFound></NotFound>;

  return (
    <div className='h-full w-full'>
      <div className='w-[100%] bg-white shadow-lg rounded-sm border border-gray-200'>
        <header className='px-5 py-4 border-b border-gray-100'>
          <div className='flex justify-between items-center'>
            <h2 className='font-bold text-xl text-gray-800 capitalize'>
              my courses
            </h2>
            <h2 className='font-bold text-xl text-gray-800 capitalize'>
              Total price:{' '}
              <span className='font-normal text-md text-green-500'>
                {totalPrice}
              </span>{' '}
              $
            </h2>
            <Link to={'/dashboard/checkout'}>
              <button className=' rounded-lg h-6 duration-200 font-bold text-xl flex justify-between items-center px-5 py-4 text-[#ececec] capitalize bg-[#12B76A] hover:bg-[#0c884e] hover:text-white'>
                <p className='me-2'>
                  <FaCreditCard></FaCreditCard>
                </p>
                <span>Checkout</span>
              </button>
            </Link>
          </div>
        </header>
        <div className='p-3'>
          <div className='overflow-x-auto'>
            <table className='table-auto w-full'>
              <thead className='text-sm font-semibold uppercase text-gray-500 bg-[#FFF2CC]'>
                <tr>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'></div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>name</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>timing</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>price</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'></div>
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm divide-y divide-gray-100'>
                {cart?.map((cartItem, index) => (
                  <>
                    <tr key={index}>
                      <td className='p-2 whitespace-nowrapz'>
                        <div className='flex items-center'>
                          <img
                            className='rounded-lg items-start w-36 h-20 flex-shrink-0 mr-3'
                            src={cartItem?.courseImage}
                            // width='200'
                            // height='30'
                            alt='instructor image'
                          />
                        </div>
                      </td>

                      <td className='p-2 whitespace-nowrap'>
                        <div className='text-left text-sm font-bold'>
                          {cartItem?.courseName}
                        </div>
                      </td>
                      <td className='p-2 whitespace-nowrap'>
                        <div className='text-left text-sm'>
                          {' '}
                          {cartItem?.courseTiming} weeks
                        </div>
                      </td>
                      <td className='p-2 whitespace-nowrap'>
                        <div className='text-left font-medium text-green-500'>
                          ${cartItem?.coursePrice}
                        </div>
                      </td>
                      <td className='p-2 whitespace-nowrap'>
                        <Link to={''}>
                          <button className=' rounded-lg h-6 duration-200 font-bold text-xs px-5 text-[#2b2b2b] capitalize bg-[#F04438] hover:bg-[#c7170b] hover:text-white'>
                            delete
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
