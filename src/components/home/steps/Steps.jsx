const Steps = () => {
  return (
    <section className='text-gray-600 body-font bg-red-100'>
      <div className='container px-5 py-10 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='uppercase text-[#101828] title-font pb-5 sm:text-3xl text-3xl font-medium font-logoFont'>
            steps of level up
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            "Kids' camping fosters essential life skills through sports and
            communication. Through team sports, daily group discussions,
            leadership opportunities, and positive feedback, children develop
            teamwork, effective communication, leadership, and self-esteem,
            setting a strong foundation for their future success."
          </p>
        </div>
        <div className='flex flex-wrap'>
          <div className='xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60'>
            <h2 className='text-lg sm:text-xl text-gray-900 font-medium title-font mb-2'>
              Team Building through Sports
            </h2>
            <p className='leading-relaxed text-base mb-4'>
              Encourage kids to participate in team sports at camp. Through
              games like soccer, basketball, or relay races, they learn
              teamwork, effective communication, and sportsmanship. These skills
              extend beyond the field, promoting cooperation and collaboration
              in other aspects of life.
            </p>
          </div>
          <div className='xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60'>
            <h2 className='text-lg sm:text-xl text-gray-900 font-medium title-font mb-2'>
              Daily Group Discussions
            </h2>
            <p className='leading-relaxed text-base mb-4'>
              Create a routine of daily group discussions where campers share
              their thoughts and experiences. This practice enhances their
              communication skills, teaches active listening, and helps them
              express themselves effectively. It also builds a sense of
              community and belonging.
            </p>
          </div>
          <div className='xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60'>
            <h2 className='text-lg sm:text-xl text-gray-900 font-medium title-font mb-2'>
              Leadership Opportunities
            </h2>
            <p className='leading-relaxed text-base mb-4'>
              Offer leadership roles in both sports and camp activities. By
              giving kids opportunities to lead a team or plan an event, they
              develop decision-making and communication skills. These
              experiences empower them to take on leadership roles in school and
              beyond.
            </p>
          </div>
          <div className='xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60'>
            <h2 className='text-lg sm:text-xl text-gray-900 font-medium title-font mb-2'>
              Positive Feedback and Encouragement
            </h2>
            <p className='leading-relaxed text-base mb-4'>
              Emphasize positive feedback and encouragement. Recognize and
              celebrate communication and sports achievements. This boosts
              children's self-esteem and motivates them to continue developing
              these essential skills while having fun at camp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
