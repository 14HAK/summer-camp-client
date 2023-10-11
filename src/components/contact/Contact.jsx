const Contact = () => {
  return (
    <div className='min-h-screen w-full bg-[#FFFBEE] flex justify-center items-center'>
      <section className='text-gray-600 body-font relative'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='uppercase text-[#101828] title-font pb-5 sm:text-3xl text-3xl font-medium font-logoFont'>
              Contact Us
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className='w-full mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <div className='flex -mx-3'>
                    <div className='w-full px-3'>
                      <label
                        htmlFor='email'
                        className='text-sm text-gray-600 px-1'
                      >
                        Email
                      </label>
                      <div className='flex'>
                        <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                          <i className='mdi mdi-email-outline text-gray-400 text-lg'></i>
                        </div>
                        <input
                          id='email'
                          type='email'
                          className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                          placeholder='example@gmail.com'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label
                    htmlFor='message'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    className='w-full bg-white bg-opacity-50  focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base text-gray-700 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                    placeholder='write your message here!'
                  ></textarea>
                </div>
              </div>
              <div className='p-2 w-full'>
                <button className='uppercase w-full mx-auto bg-[#FFC000] duration-500 hover:bg-[#12B76A] text-white rounded-lg px-6 py-2 font-semibold'>
                  send us!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
