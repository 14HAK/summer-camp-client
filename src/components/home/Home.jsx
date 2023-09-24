import Slider from './slider/Slider';
import AnalyticalThinking from '../../assets/AboutSectionLogo/AnalyticalThinking.svg';
import ConceptualLearning from '../../assets/AboutSectionLogo/ConceptualLearning.svg';
import PersonalDevelopment from '../../assets/AboutSectionLogo/PersonalDevelopment.svg';
import PublicSpeking from '../../assets/AboutSectionLogo/PublicSpeking.svg';
import { Link } from 'react-router-dom';
import SingleCourse from '../courses/singleCourse/SingleCourse';
import SingleInstructor from '../instructors/singleInstructors/SingleInstructor';
import useGetApprovedCourse from '../../hooks/useGetApprovedCourse';
import Contact from './contact/Contact';
import Steps from './steps/Steps';
import Channel from './channel/Channel';

const Home = () => {
  const [isLoading, error, data] = useGetApprovedCourse();
  const sliceCourse = data?.slice(2, 5);
  // console.log(sliceCourse);

  return (
    <div className='min-h-screen'>
      {/* slider or carosel  */}
      <section className='w-full'>
        <Slider></Slider>
      </section>

      {/* about section short  */}
      <section className='py-10 w-full bg-orange-50'>
        {/* section title  */}
        <div className='w-8/12 mx-auto py-10 flex flex-col items-center text-center'>
          <h1 className='uppercase text-[#101828] title-font pb-5 sm:text-3xl text-3xl font-medium font-logoFont'>
            about kid development
          </h1>
          <p className='leading-relaxed text-lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
            corrupti porro ducimus magni minima reiciendis officia ea
            voluptatibus consectetur laudantium.
          </p>
        </div>

        {/* section steps  */}
        {/* TODO: when data available replace this card dynamically */}
        <div className='w-12/12 mx-auto pb-10 grid sm:grid-cols-1 lg:grid-cols-3 px-5 gap-10 text-center'>
          {/* itm-1  */}
          <div className='flex flex-col text-center w-full'>
            <h1 className='text-6xl font-bold font-logoFont title-font text-red-500'>
              01
            </h1>
            <h1 className='capitalize sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              Education
            </h1>
            <p className='lg:w-3/3 mx-auto leading-relaxed text-md text-justify'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              eaque voluptatibus necessitatibus atque eius hic nisi neque illum
              assumenda doloribus. Adipisci quia totam debitis blanditiis in
              laboriosam, illum a consequuntur, repudiandae dolorem, velit
              quidem eaque quaerat. Officia nihil deserunt eum!
            </p>
          </div>
          {/* itm-2  */}
          <div className='flex flex-col text-center w-full'>
            <h1 className='text-6xl font-bold font-logoFont title-font text-purple-500'>
              02
            </h1>
            <h1 className='capitalize sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              communication
            </h1>
            <p className='lg:w-3/3 mx-auto leading-relaxed text-md text-justify'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              eaque voluptatibus necessitatibus atque eius hic nisi neque illum
              assumenda doloribus. Adipisci quia totam debitis blanditiis in
              laboriosam, illum a consequuntur, repudiandae dolorem, velit
              quidem eaque quaerat. Officia nihil deserunt eum!
            </p>
          </div>
          {/* itm-3  */}
          <div className='flex flex-col text-center w-full'>
            <h1 className='text-6xl font-bold font-logoFont title-font text-yellow-300'>
              03
            </h1>
            <h1 className='capitalize sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              invention
            </h1>
            <p className='lg:w-3/3 mx-auto leading-relaxed text-md text-justify'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              eaque voluptatibus necessitatibus atque eius hic nisi neque illum
              assumenda doloribus. Adipisci quia totam debitis blanditiis in
              laboriosam, illum a consequuntur, repudiandae dolorem, velit
              quidem eaque quaerat. Officia nihil deserunt eum!
            </p>
          </div>
        </div>
        {/* expert section */}
        {/* TODO: when data available replace this card dynamically */}
        <div className='w-12/12 mx-auto pb-10 bg-slate-100 p-10 text-center'>
          <div className='container mx-auto flex px-5 md:flex-row flex-col items-center'>
            <div className='lg:flex-grow md:w-2/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
              <h1 className='capitalize underline mx-auto title-font sm:text-2xl text-3xl font-medium text-gray-900'>
                <span>we aim to do that throw...</span>
                <small className='font-normal text-md'>
                  <Link to={'/about'}>
                    <button className='ms-2 rounded-lg w-32 h-6 duration-200 font-bold text-xs py-1 px-5 text-[#2b2b2b] capitalize bg-[#FFC000] hover:bg-[#12B76A] hover:text-white'>
                      Know more
                    </button>
                  </Link>
                </small>
              </h1>
              {/* all cards */}
              <div className='grid grid-cols-2'>
                {/* card1  */}
                <div className='p-4 lg:w-2/2'>
                  <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
                    <img
                      alt='team'
                      className='flex-shrink-0 self-start  rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4'
                      src={AnalyticalThinking}
                    />
                    <div className='flex-grow text-start sm:pl-2'>
                      <h2 className='capitalize title-font font-medium text-lg text-gray-900'>
                        Analytical Thinking
                      </h2>
                      <p className='mb-4 w-auto'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Corporis, aperiam.
                      </p>
                      <span className='inline-flex'>
                        <a className='text-gray-500'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                          >
                            <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                          </svg>
                        </a>
                        <a className='ml-2 text-gray-500'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                          >
                            <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                          </svg>
                        </a>
                        <a className='ml-2 text-gray-500'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                          >
                            <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/* card2  */}
                <div className='p-4 lg:w-2/2'>
                  <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
                    <img
                      alt='team'
                      className='flex-shrink-0 self-start rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4'
                      src={ConceptualLearning}
                    />
                    <div className='flex-grow text-start sm:pl-2'>
                      <h2 className='capitalize title-font  font-medium text-lg text-gray-900'>
                        Conceptual Learning
                      </h2>
                      <p className='mb-4 w-auto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae, laudantium!
                      </p>
                      <span className='inline-flex'>
                        <a className='text-gray-500'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                          >
                            <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                          </svg>
                        </a>
                        <a className='ml-2 text-gray-500'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                          >
                            <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                          </svg>
                        </a>
                        <a className='ml-2 text-gray-500'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                          >
                            <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/* card3  */}
                <div className='p-4 lg:w-2/2'>
                  <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
                    <img
                      alt='team'
                      className='flex-shrink-0 self-start rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4'
                      src={PersonalDevelopment}
                    />
                    <div className='flex-grow text-start sm:pl-2'>
                      <h2 className='capitalize title-font  font-medium text-lg text-gray-900'>
                        Personal Development
                      </h2>
                      <p className='mb-4 w-auto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae, laudantium!
                      </p>
                      <span className='inline-flex'>
                        <a className='text-gray-500'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                          >
                            <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                          </svg>
                        </a>
                        <a className='ml-2 text-gray-500'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                          >
                            <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                          </svg>
                        </a>
                        <a className='ml-2 text-gray-500'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                          >
                            <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                {/* card4  */}
                <div className='p-4 lg:w-2/2'>
                  <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
                    <img
                      alt='team'
                      className='flex-shrink-0 self-start rounded-lg w-20 h-20 object-cover object-center sm:mb-0 mb-4'
                      src={PublicSpeking}
                    />
                    <div className='flex-grow text-start sm:pl-2'>
                      <h2 className='capitalize title-font font-medium text-lg text-gray-900'>
                        Public Speking
                      </h2>
                      <p className='mb-4 w-auto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae, laudantium!
                      </p>
                      <span className='inline-flex'>
                        <a className='text-gray-500'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                          >
                            <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                          </svg>
                        </a>
                        <a className='ml-2 text-gray-500'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                          >
                            <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                          </svg>
                        </a>
                        <a className='ml-2 text-gray-500'>
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-5 h-5'
                            viewBox='0 0 24 24'
                          >
                            <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:max-w-lg lg:w-full md:w-2/2 w-6/6'>
              <img
                className='object-cover object-center rounded'
                alt='hero'
                src='https://whyy.org/wp-content/uploads/2019/02/bigstock-Kids-Education-Knowledge-Field-186276457.jpg'
              />
            </div>
          </div>
        </div>
      </section>

      <Steps></Steps>

      {/* academic course section */}
      {/* TODO: when data available replace this dynamically */}
      <section className=' w-full'>
        <div className='w-8/12 mx-auto py-10 flex flex-col items-center text-center'>
          <h1 className='uppercase text-[#101828] title-font pb-5 sm:text-3xl text-3xl font-medium font-logoFont'>
            courses
          </h1>
          <p className='leading-relaxed text-lg'>
            Get ready for an unforgettable summer sports camp experience at
            Kida! Our summer sports camp offers a perfect blend of fun, fitness,
            and friendship. Join us to explore a wide range of exciting sports
            activities such as soccer, basketball, swimming, tennis, and more.
            <small className='font-normal text-md'>
              <Link to={'/courses'}>
                <button className='ms-2 rounded-lg w-32 h-6 duration-200 font-bold text-xs py-1 px-5 text-[#2b2b2b] capitalize bg-[#FFC000] hover:bg-[#12B76A] hover:text-white'>
                  see all courses
                </button>
              </Link>
            </small>
          </p>
        </div>

        {/* all cards  */}
        {/* TODO: when data available replace this dynamically only show 3 cards beacause its home page */}
        <div className='grid sm:grid-cols-1 bg-orange-50 lg:px-20 lg:py-10 lg:grid-cols-3 items-center justify-center gap-5'>
          {/* card-1 show course minimum 3 cards */}
          {sliceCourse?.map((everyCard, index) => (
            <SingleCourse key={index} data={everyCard}></SingleCourse>
          ))}
        </div>
      </section>

      {/* academic instructor course section */}
      {/* TODO: when data available replace this dynamically */}
      <section className='pb-20 w-full'>
        <div className='w-8/12 mx-auto py-10 flex flex-col items-center text-center'>
          <h1 className='uppercase text-[#101828] title-font pb-5 sm:text-3xl text-3xl font-medium font-logoFont'>
            our instructors
          </h1>
          <p className='leading-relaxed text-lg'>
            At Kida Summer Camp, we take pride in our team of exceptional
            instructors who are passionate about sports and dedicated to
            providing an enriching experience for every child.
            <small className='font-normal text-md'>
              <Link to={'/instructors'}>
                <button className='ms-2 rounded-lg w-40 h-6 duration-200 font-bold text-xs py-1 px-5 text-[#2b2b2b] capitalize bg-[#FFC000] hover:bg-[#12B76A] hover:text-white'>
                  instructor courses
                </button>
              </Link>
            </small>
          </p>
        </div>

        {/* all cards  */}
        {/* TODO: when data available replace this dynamically only show 3 cards beacause its home page */}
        <div className='grid sm:grid-cols-1 bg-orange-50 lg:px-20 lg:py-10 lg:grid-cols-3 items-center justify-center gap-5'>
          {/* card-1 show instructor course minimum 3 cards */}
          {sliceCourse?.map((everyCard, index) => (
            <SingleInstructor key={index} data={everyCard}></SingleInstructor>
          ))}
        </div>
      </section>
      <Contact></Contact>
      <Channel></Channel>
    </div>
  );
};

export default Home;
