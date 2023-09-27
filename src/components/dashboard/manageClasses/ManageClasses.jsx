import useGetRawData from '../../../hooks/useGetRawData';
import Loading from '../../loader/Loading';
import NotFound from '../../404/NotFound';
import CourseRow from './CourseRow/CourseRow';

const ManageClasses = () => {
  const [, isLoading, error, data] = useGetRawData();

  if (isLoading) return <Loading></Loading>;
  if (error) return <NotFound></NotFound>;

  return (
    <div className='h-full w-full'>
      <div className='w-[100%] bg-white shadow-lg rounded-sm border border-gray-200'>
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
                    <div className='font-semibold text-left'>Instructor</div>
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
                    <div className='font-semibold text-center'>permission</div>
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm divide-y divide-gray-100'>
                {data?.map((course, index) => (
                  <CourseRow key={index} course={course}></CourseRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
