import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context/ContextPassData';

const Navbar = () => {
  const { user, setUser, logOutUser } = useContext(MyContext);

  //sign out:
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        setUser(null);
        localStorage.removeItem('accessToken');
      })
      .catch();
  };

  return (
    <>
      <section className=' bg-[#FFF2CC] sticky top-0 z-30 font-semibold body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link
            to={'/'}
            className='flex title-font font-medium font-logoFont items-center text-gray-900 mb-4 md:mb-0'
          >
            <span className='cursor-pointer'>
              <span className='text-[#FFC000] text-5xl'>SUMMER</span>
              <small className='text-[#636262] text-xl ml-1 '>level</small>
            </span>
          </Link>
          <nav className=' uppercase font-normal md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-[#808080] justify-center'>
            <Link
              to={'/home'}
              className='mr-5 cursor-pointer hover:text-[#FFC000] hover:underline'
            >
              Home
            </Link>
            <Link
              to={'/about'}
              className='mr-5 cursor-pointer hover:text-[#FFC000] hover:underline'
            >
              about
            </Link>

            <Link
              to={'/courses'}
              className='mr-5 cursor-pointer hover:text-[#FFC000] hover:underline'
            >
              courses
            </Link>
            <Link
              to={'/instructors'}
              className='mr-5 cursor-pointer hover:text-[#FFC000] hover:underline'
            >
              instructors
            </Link>
            <Link
              to={'/blog'}
              className='mr-5 cursor-pointer hover:text-[#FFC000] hover:underline'
            >
              blog
            </Link>
            <Link
              to={'/contactus'}
              className='mr-5 cursor-pointer hover:text-[#FFC000] hover:underline'
            >
              contact-us
            </Link>
            {user && (
              <Link
                to={'/dashboard'}
                className='mr-5 cursor-pointer hover:text-[#FFC000] hover:underline'
              >
                dashboard
              </Link>
            )}
          </nav>
          <section className='mr-5 '>
            <div className='flex mt-5 lg:mt-0'>
              {/* user felid */}
              {/* TODO: conditionally change when user is available */}
              {user ? (
                <>
                  <div className='w-14 h-14 overflow-hidden rounded-full mr-2 border border-[#FFC000]'>
                    <img
                      className='rounded-full w-14'
                      src={user?.photoURL}
                      alt={user?.displayName}
                    />
                  </div>
                  <div className=' flex flex-col items-start self-end'>
                    <div className='flex items-center'>
                      <p className='font-bold text-md text-[#101828]'>
                        {user?.displayName}
                      </p>
                      <small className='text-sm font-light'>
                        <button
                          onClick={() => handleLogOut()}
                          className='uppercase mr-2 px-3 font-lg hover:bg-[#F04438]  hover:text-[white]  bg-[#FFC000] text-[#101828] rounded-lg hover:ring-1  ml-1 font-normal duration-300'
                        >
                          sign out
                        </button>
                      </small>
                    </div>
                    <small className='text-[#12B76A]'>{user?.email}</small>
                  </div>
                </>
              ) : (
                <>
                  <small>
                    <Link to={'/signin'}>
                      <button className='uppercase mr-2 px-10 py-2 font-lg hover:bg-[#12B76A]  hover:text-[white] duration-300 bg-[#FFC000] text-[#101828] rounded-lg hover:ring-1 '>
                        sign in
                      </button>
                    </Link>
                  </small>
                </>
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Navbar;
