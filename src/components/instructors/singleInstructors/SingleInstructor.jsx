const SingleInstructor = ({ data }) => {
  console.log(data);
  return (
    <div className='w-56 h-56 overflow-hidden rounded-full bg-slate-600 m-auto'>
      <img
        className='object-cover object-center opacity-25 hover:opacity-75 duration-500'
        src={data?.instructor_image}
        alt='blog'
      />
    </div>
  );
};

export default SingleInstructor;
