import { Link } from 'react-router-dom';
import useGetInstructorCourse from '../../../hooks/useGetInstructorCourse';
import Loading from '../../loader/Loading';
import NotFound from '../../404/NotFound';
// show all the classes that you are added row classes dynamicly and filter out from user class
const MyCourses = () => {
  const [isLoading, error, data] = useGetInstructorCourse();
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
                    <div className='font-semibold text-left'></div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>course</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Seats</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>price</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>status</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>enrolled</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-center'>feedback</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-center'>update</div>
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm divide-y divide-gray-100'>
                {data?.map((course, index) => (
                  <>
                    <tr key={index}>
                      <td className='p-2 whitespace-nowrapz'>
                        <div className='flex items-center'>
                          <img
                            className='rounded-lg items-start w-36 h-20 flex-shrink-0 mr-3'
                            src={course?.courseImage}
                            // width='200'
                            // height='30'
                            alt='instructor image'
                          />
                        </div>
                      </td>

                      <td className='p-2 whitespace-nowrap'>
                        <div className='text-left text-sm'>
                          {course?.courseName}
                        </div>
                      </td>
                      <td className='p-2 whitespace-nowrap'>
                        <div className='text-left text-sm'>
                          {course?.courseSets}
                        </div>
                      </td>
                      <td className='p-2 whitespace-nowrap'>
                        <div className='text-left font-medium text-green-500'>
                          ${course?.coursePrice}
                        </div>
                      </td>
                      <td className='p-2 whitespace-nowrap'>
                        <div className='text-left font-medium text-green-500'>
                          {course?.course_status === 'pending' ? (
                            <span className='rounded-full w-32 h-6 animate-pulse py-0.5 duration-700 font-bold text-xs px-3 text-[#2b2b2b] capitalize bg-[#FFC000]'>
                              pending...
                            </span>
                          ) : course?.course_status === 'approved' ? (
                            <span className='rounded-full w-32 h-6 duration-700 py-0.5 font-bold text-xs px-3 text-[#2b2b2b] capitalize bg-[#12B76A]'>
                              approved
                            </span>
                          ) : course?.course_status === 'denied' ? (
                            <span className='rounded-full w-32 h-6 duration-700 py-0.5 font-bold text-xs px-3 text-[#2b2b2b] capitalize bg-[#F04438]'>
                              denied
                            </span>
                          ) : (
                            <></>
                          )}
                        </div>
                      </td>
                      <td className='p-2 whitespace-nowrap'>
                        <div className='text-left text-sm'>
                          <span className='text-[#6d34f0] font-semibold'>
                            Total:{' '}
                          </span>
                          {course?.course_enrolled}
                        </div>
                      </td>
                      <td className='p-2 whitespace-nowrap'>
                        <div className='text-lg text-center text-yellow-500'>
                          <Link to={''}>
                            <button className=' rounded-lg h-6 duration-200 font-bold text-xs px-2 text-[#2b2b2b] capitalize bg-[#12B76A] hover:bg-[#0c884e] hover:text-white'>
                              feedback
                            </button>
                          </Link>
                        </div>
                      </td>
                      <td className='p-2 whitespace-nowrap'>
                        <div className='text-lg text-center text-yellow-500'>
                          <Link to={''}>
                            <button className=' rounded-lg h-6 duration-200 font-bold text-xs px-2 text-[#2b2b2b] capitalize bg-[#c783d4] hover:bg-[#b825ab] hover:text-white'>
                              update
                            </button>
                          </Link>
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

export default MyCourses;
