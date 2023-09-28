const SingleInstructor = ({ data }) => {
  // console.log(data);
  return (
    <div>
      {/* card-1  */}
      <div className='p-4 md:w-3/3'>
        <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-t-full overflow-hidden'>
          <img
            className='lg:h-48 md:h-36 w-full rounded-t-full object-cover object-center'
            src='https://media.istockphoto.com/id/1023229588/photo/young-male-educator-stands-proudly-in-school-building.jpg?s=612x612&w=0&k=20&c=qra2owV9l3gp3X-fj0I5CUnPllyQIzpUSmOPmLjEeQo='
            alt='blog'
          />
          <div className='p-6'>
            <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
              ali hossain
            </h1>
            <p className='leading-relaxed mb-3'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Expedita, itaque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInstructor;
