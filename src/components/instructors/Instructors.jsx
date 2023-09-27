import { Link } from 'react-router-dom';
import useGetInstructorCourse from '../../hooks/useGetInstructorCourse';
import Loading from '../loader/Loading';
import NotFound from '../404/NotFound';

const Instructors = () => {
  const [isLoading, error, data] = useGetInstructorCourse();
  // console.log(data);

  if (isLoading) return <Loading></Loading>;
  if (error) return <NotFound></NotFound>;

  return (
    <div className='bg-[#FFFBEE]'>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col'>
            <div className='h-1 bg-gray-200 rounded overflow-hidden'>
              <div className='w-24 h-full bg-indigo-500'></div>
            </div>
            <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
              <h1 className='sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0'>
                Space The Final Frontier
              </h1>
              <p className='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
                Street art subway tile salvia four dollar toast bitters selfies
                quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>
          <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
            {/* TODO: when dynamic data avialeble then dynamic card showing */}
            <div className='p-4 md:w-1/3 sm:mb-0 mb-6 ring-1 rounded-lg'>
              <div className='rounded-lg h-64 overflow-hidden'>
                <img
                  alt='content'
                  className='object-cover object-center h-full w-full'
                  src='https://dummyimage.com/1203x503'
                />
              </div>
              <h2 className='text-xl font-medium title-font text-gray-900 mt-5'>
                Shooting Stars
              </h2>
              <p className='text-base leading-relaxed mt-2'>
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <small className='font-normal text-md'>
                <Link to={'/instructors_details'}>
                  <button className='rounded-lg w-32 mt-2 h-6 duration-200 font-bold text-xs py-1 px-5 text-[#2b2b2b] capitalize bg-[#FFC000] hover:bg-[#12B76A] hover:text-white'>
                    see details
                  </button>
                </Link>
              </small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;
