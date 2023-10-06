import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <>
      <div className='carousel w-full'>
        <div id='slide1' className='carousel-item relative w-full'>
          <div
            className=' h-96 duration-700 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            data-carousel-item
          >
            <img
              src='https://as2.ftcdn.net/v2/jpg/04/55/46/91/1000_F_455469145_aCuxuoCZvNTGOO8bKD9xBf8t35W0f6CH.jpg'
              className='absolute h-96 brightness-[50%] block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-90'
              alt='...'
            />

            <div className='absolute top-[10%] left-[15%] lg:top-[40%] lg:left-[10%]'>
              <h2 className='text-3xl lg:text-4xl text-slate-200 font-bold font-logoFont w-12/12 lg:w-8/12'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis.
              </h2>
              <button className=' mt-2 uppercase mr-2 px-3 py-1 font-semibold font-logoFont hover:bg-[#FFF2CC]  hover:text-[#101828]  bg-[#FFC000] text-[#101828] rounded-lg hover:ring-1  ml-1  duration-300'>
                sign out
              </button>
            </div>
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <div
            className=' h-96 duration-700 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            data-carousel-item
          >
            <img
              src='https://t3.ftcdn.net/jpg/03/53/15/04/240_F_353150466_2s2qebykEGB4HWRwczDXdHjUEuM7OjVG.jpg'
              className='absolute brightness-[50%] block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-96 opacity-90'
              alt='...'
            />
            <div className='absolute top-[10%] left-[15%] lg:top-[40%] lg:left-[10%]'>
              <h2 className='text-3xl lg:text-4xl text-slate-200 font-bold font-logoFont w-12/12 lg:w-8/12'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis.
              </h2>
              <button className=' mt-2 uppercase mr-2 px-3 py-1 font-semibold font-logoFont hover:bg-[#FFF2CC]  hover:text-[#2b2b2b]  bg-[#FFC000] text-[#2b2b2b] rounded-lg hover:ring-1  ml-1  duration-300'>
                sign out
              </button>
            </div>
          </div>
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <div
            className=' h-96 duration-700 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            data-carousel-item
          >
            <img
              src='https://abc6onyourside.com/resources/media/94ee0ecc-23ff-442b-b828-ea75fc8a5d97-medium16x9_Terri_5.jpg?1682435227255'
              className='absolute brightness-[50%] block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-96 opacity-90'
              alt='...'
            />
          </div>
          <div className='absolute top-[10%] left-[15%] lg:top-[40%] lg:left-[10%]'>
            <h2 className='text-3xl lg:text-4xl text-slate-200 font-bold font-logoFont w-12/12 lg:w-8/12'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis.
            </h2>
            <button className=' mt-2 uppercase mr-2 px-3 py-1 font-semibold font-logoFont hover:bg-[#FFF2CC]  hover:text-[#101828]  bg-[#FFC000] text-[#101828] rounded-lg hover:ring-1  ml-1  duration-300'>
              sign out
            </button>
          </div>

          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <Link href='#slide2' className='btn btn-circle'>
              ❮
            </Link>
            <Link href='#slide4' className='btn btn-circle'>
              ❯
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
