import axios from 'axios';

const useUserPost = () => {
  const postUserDB = async (data) => {
    const res = await axios.post(
      'https://summer-camp-server-omega-five.vercel.app/alluser',
      {
        ...data,
      }
    );
    const userPost = await res.json();
    return userPost;
  };

  return [postUserDB];
};

export default useUserPost;
