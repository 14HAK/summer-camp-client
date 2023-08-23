import { Link } from 'react-router-dom';
import useGetApprovedCourse from '../../hooks/useGetApprovedCourse';
import useGetSingleCourse from '../../hooks/useGetSingleCourse';

const Courses = () => {
  const [isLoading, error, data] = useGetApprovedCourse();
  // console.log(data);

  const [fetchSingleCourse] = useGetSingleCourse();

  const handleSingleCourse = (id) => {
    // console.log(id);

    fetchSingleCourse(id);
  };

  return (
    <div className='bg-[#FFFBEE]'>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col'>
            <div className='h-1 bg-gray-200 rounded overflow-hidden'>
              <div className='w-24 h-full bg-indigo-500'></div>
            </div>
            <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
              <h1 className='sm:w-2/5 underline text-gray-900 font-medium title-font text-3xl mb-2 sm:mb-0'>
                {'Summer Camp Sports Courses: Discover Fun and Fitness'}
              </h1>
              <p className='sm:w-3/5 leading-relaxed text-lg text-[#C27712] sm:pl-10 pl-0'>
                Explore our exciting lineup of sports courses for kids at our
                Summer Camp! Engage in energetic activities, learn new skills,
                and make lasting memories while enjoying a variety of sports
                such as soccer, basketball, swimming, and more. Our experienced
                coaches and state-of-the-art facilities provide a safe and
                supportive environment for children to develop their athletic
                abilities and foster teamwork. Join us for an action-packed
                summer full of sportsmanship, camaraderie, and pure enjoyment!
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {data?.map((course, index) => (
              <>
                {' '}
                <div
                  key={index}
                  className='p-4 sm:mb-0 mb-6 ring-1 ring-slate-100 rounded-lg'
                >
                  <div className='rounded-lg h-64 overflow-hidden'>
                    <img
                      alt='content'
                      className='object-cover object-center h-full w-full'
                      src={course?.courseImage}
                    />
                  </div>
                  <h2 className='text-xl font-medium title-font text-gray-900 mt-5'>
                    {course?.courseTitle}
                  </h2>
                  <p className='text-base leading-relaxed mt-2'>
                    {course?.courseDescription.slice(0, 100)}...
                  </p>
                  <small className='font-normal text-md'>
                    <Link to={'/course_details'}>
                      <button
                        onClick={() => handleSingleCourse(course?._id)}
                        className='rounded-lg w-32 mt-2 h-6 duration-200 font-bold text-xs py-1 px-5 text-[#2b2b2b] capitalize bg-[#FFC000] hover:bg-[#12B76A] hover:text-white'
                      >
                        see details
                      </button>
                    </Link>
                  </small>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
