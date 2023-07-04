import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/loader/Loading';
import useGetUser from '../hooks/useGetUser';
import NotFound from '../components/404/NotFound';

const Instructor = ({ children }) => {
  const [isLoading, error, data] = useGetUser();

  let location = useLocation();

  if (isLoading) {
    <Loading></Loading>;
  }

  if (error) {
    <NotFound></NotFound>;
  }

  if (!data?.user_role) {
    <Navigate to='/login' state={{ from: location }} replace />;
  }

  if (data?.user_role === 'instructor') {
    return children;
  }
};

export default Instructor;
