import { Link } from 'react-router-dom';
import useGetAllUsers from '../../../hooks/useGetAllUsers';
import Loading from '../../loader/Loading';
import NotFound from '../../404/NotFound';

const ManageUsers = () => {
  const [isLoading, error, data] = useGetAllUsers();
  // console.log(data);

  if (isLoading) return <Loading></Loading>;
  if (error) return <NotFound></NotFound>;

  return (
    <div className='h-full w-full'>
      <div className='w-full bg-white shadow-lg rounded-sm border border-gray-200'>
        <header className='px-5 py-4 border-b border-gray-100'>
          <h2 className='font-bold text-xl text-gray-800 capitalize'>
            courses
          </h2>
        </header>
        <div className='p-3'>
          <div className='overflow-x-auto'>
            <table className='table-auto w-full'>
              <thead className='text-sm font-semibold uppercase text-gray-500 bg-[#FFF2CC]'>
                <tr>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>user info</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>user phone</div>
                  </th>

                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>user role</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-center'>change role</div>
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm divide-y divide-gray-100'>
                {data?.map((user, index) => (
                  <>
                    <tr key={index}>
                      <td className='p-2 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='w-12 h-12 overflow-hidden rounded-full mr-2 border border-[#FFC000]'>
                            <img
                              className='rounded-full w-14'
                              src={user?.img}
                              alt={user?.img}
                            />
                          </div>
                          <div>
                            <h4 className='text-sm font-semibold text-gray-900'>
                              {user?.name}
                            </h4>
                            <div className='text-[13px]'>{user?.email}</div>
                          </div>
                        </div>
                      </td>

                      <td className='p-2 whitespace-nowrap'>
                        <div className='text-left font-medium text-green-500'>
                          {user?.email}
                        </div>
                      </td>

                      <td className='p-2 whitespace-nowrap'>
                        <div className='text-left font-medium text-green-500'>
                          {user?.user_role === 'admin' ? (
                            <>
                              {' '}
                              <span className='rounded-full w-32 h-6 py-0.5 duration-700 font-bold text-xs px-3 text-white capitalize bg-[#085732]'>
                                admin
                              </span>
                            </>
                          ) : user?.user_role === 'instructor' ? (
                            <>
                              <span className='rounded-full w-32 h-6 duration-700 py-0.5 font-bold text-xs px-3 text-white capitalize bg-[#250f85]'>
                                instructor
                              </span>
                            </>
                          ) : user?.user_role === 'basic' ? (
                            <>
                              <span className='rounded-full w-32 h-6 duration-700 py-0.5 font-bold text-xs px-3 text-white capitalize bg-[#505152]'>
                                basic
                              </span>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </td>
                      <td className='p-2 whitespace-nowrap'>
                        <div className='text-lg text-center text-yellow-500'>
                          <Link to={''}>
                            <button className=' rounded-lg h-6 duration-200 font-bold text-xs px-2 text-[#2b2b2b] capitalize bg-[#12B76A] hover:bg-[#0c884e] hover:text-white'>
                              admin permission
                            </button>
                          </Link>
                          {/* change it conditonaly toggled button  */}
                          {/* <Link to={''}>
                        <button className=' ms-2 rounded-lg h-6 duration-200 font-bold text-xs px-2 text-[#2b2b2b] capitalize bg-[#9a88e9] hover:bg-[#2a0cb3] hover:text-white'>
                          instructor permission
                        </button>
                      </Link> */}
                        </div>
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

export default ManageUsers;
