const About = () => {
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          <div className='flex flex-wrap w-full'>
            <div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-6'>
              <div className='flex relative pb-12'>
                <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
                </div>
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                  </svg>
                </div>
                <div className='flex-grow pl-4'>
                  <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Skill-Building Fun
                  </h2>
                  <p className='leading-relaxed'>
                    At our camp, kids have a blast while improving their skills.
                    They can choose from activities like coding, robotics, and
                    creative arts, ensuring that learning is exciting.
                  </p>
                </div>
              </div>
              <div className='flex relative pb-12'>
                <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
                </div>
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                  </svg>
                </div>
                <div className='flex-grow pl-4'>
                  <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Connected Communities
                  </h2>
                  <p className='leading-relaxed'>
                    Our campers form meaningful connections with peers, both in
                    person and online. Through collaborative projects and
                    digital platforms, they build friendships that extend beyond
                    the summer.
                  </p>
                </div>
              </div>
              <div className='flex relative pb-12'>
                <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
                </div>
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <circle cx='12' cy='5' r='3'></circle>
                    <path d='M12 22V8M5 12H2a10 10 0 0020 0h-3'></path>
                  </svg>
                </div>
                <div className='flex-grow pl-4'>
                  <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Empowerment and Growth
                  </h2>
                  <p className='leading-relaxed'>
                    Campers are encouraged to take on leadership roles and
                    express their ideas. This empowers them to develop a growth
                    mindset and take charge of their own learning journey.
                  </p>
                </div>
              </div>
              <div className='flex relative pb-12'>
                <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
                </div>
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                    <circle cx='12' cy='7' r='4'></circle>
                  </svg>
                </div>
                <div className='flex-grow pl-4'>
                  <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Mentors in Tech
                  </h2>
                  <p className='leading-relaxed'>
                    Experienced mentors, including tech-savvy counselors, guide
                    kids in digital literacy and tech-based projects. This
                    mentorship helps them develop 21st-century skills.
                  </p>
                </div>
              </div>
              <div className='flex relative'>
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </div>
                <div className='flex-grow pl-4'>
                  <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    Tech Adventures
                  </h2>
                  <p className='leading-relaxed'>
                    We explore the digital world through virtual reality,
                    augmented reality, and other cutting-edge tech adventures.
                    Kids gain a deeper understanding of technology's impact on
                    our lives.
                  </p>
                </div>
              </div>
            </div>
            <img
              className='lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12'
              src='https://www.parents.com/thmb/O9qCmx9_ZqxyHawVgLaDQ9jBry4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1016070420-ddafe4397177449cbe1165a1b7595e74.jpg'
              alt='step'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
