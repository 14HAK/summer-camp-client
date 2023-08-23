import axios from 'axios';

const useUserPost = () => {
  const postUserDB = (data) => {
    axios
      .post('http://localhost:3000/alluser', { ...data })
      .then((res) => console.log(res?.data))
      .catch((err) => console.error(err));
  };

  return [postUserDB];
};

export default useUserPost;
