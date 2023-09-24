import {
  FaClipboardList,
  FaFilter,
  FaGripVertical,
  FaHome,
  FaReadme,
  FaShoppingBag,
  FaThList,
  FaUsers,
} from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useGetUser from '../hooks/useGetUser';
import Loading from '../components/loader/Loading';
import NotFound from '../components/404/NotFound';

const Dashboard = () => {
  const [isLoading, error, data] = useGetUser();

  if (isLoading) {
    return (
      <div className='text-3xl flex justify-center items-center'>
        <Loading></Loading>
      </div>
    );
  } else if (error) {
    return (
      <div className='text-3xl flex justify-center items-center'>
        <NotFound></NotFound>
      </div>
    );
  } else {
    return (
      <div>
        <div className='drawer lg:drawer-open'>
          <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content flex flex-col items-center justify-center'>
            <div className='w-[100%] min-h-screen overflow-y-auto bg-[#FFFBEE] p-5 flex justify-center items-center lg:p-10'>
              {/* main content here  */}
              <Outlet></Outlet>
            </div>
            <label
              htmlFor='my-drawer-2'
              className='btn btn-primary drawer-button fixed top-2 left-2 lg:hidden'
            >
              <FaGripVertical></FaGripVertical>
            </label>
          </div>
          <div className='drawer-side min-h-screen overflow-y-auto'>
            <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
            <ul className='bg-[#FFF2CC] menu p-4 min-h-screen overflow-y-auto w-64 py-10 text-base-content'>
              {/* Sidebar content here */}
              <li>
                <Link
                  to={'/home'}
                  className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 mb-1'
                >
                  <span className='text-xl'>
                    <FaHome></FaHome>
                  </span>

                  <span className='text-sm uppercase font-semibold'>home</span>
                </Link>
              </li>

              {data?.user_role === 'admin' ? (
                <>
                  {' '}
                  <li>
                    <Link
                      to={'/dashboard/manageclasses'}
                      className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 mb-1'
                    >
                      <span className='text-xl'>
                        <FaFilter></FaFilter>
                      </span>

                      <span className='text-sm uppercase font-semibold'>
                        manage-courses
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/dashboard/manageusers'}
                      className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 mb-1 uppercase'
                    >
                      <span className='text-xl'>
                        <FaUsers></FaUsers>
                      </span>

                      <span className='text-sm font-medium'>Manage Users</span>
                    </Link>
                  </li>
                </>
              ) : data?.user_role === 'instructor' ? (
                <>
                  <li>
                    <Link
                      to={'/dashboard/addcourse'}
                      className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 mb-1 uppercase'
                    >
                      <span className='text-xl'>
                        <FaReadme></FaReadme>
                      </span>

                      <span className='text-sm font-medium'>add course</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/dashboard/mycourse'}
                      className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 mb-1 uppercase'
                    >
                      <span className='text-xl'>
                        <FaThList></FaThList>
                      </span>

                      <span className='text-sm font-medium'>my course</span>
                    </Link>
                  </li>
                </>
              ) : data?.user_role === 'basic' ? (
                <>
                  <li>
                    <Link
                      to={'/dashboard/mycart'}
                      className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 mb-1 uppercase'
                    >
                      <span className='text-xl'>
                        <FaShoppingBag></FaShoppingBag>
                      </span>

                      <span className='text-sm font-medium'>my cart</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/dashboard/paymenthistory'}
                      className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 mb-1 uppercase'
                    >
                      <span className='text-xl'>
                        <FaClipboardList></FaClipboardList>
                      </span>

                      <span className='text-sm font-medium'>
                        Payment history
                      </span>
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
