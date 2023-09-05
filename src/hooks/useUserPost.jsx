import axios from 'axios';

const useUserPost = () => {
  const postUserDB = (data) => {
    axios
      .post('https://summer-camp-server-gug1twojs-14hak.vercel.app/alluser', {
        ...data,
      })
      .then((res) => console.log(res?.data))
      .catch((err) => console.error(err));
  };

  return [postUserDB];
};

export default useUserPost;
