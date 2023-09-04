import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Blog from '../components/blog/Blog';
import Courses from '../components/courses/Courses';
import NotFound from '../components/404/NotFound';
import CourseDetails from '../components/courses/courseDetails/CourseDetails';
import Instructors from '../components/instructors/Instructors';
import InstructorsDetails from '../components/instructorsDetails/InstructorsDetails';
import Contact from '../components/contact/Contact';
import Signin from '../components/signin/Signin';
import Demo from '../components/demo/Demo';
import Signup from '../components/signUp/Signup';
import Dashboard from '../layouts/Dashboard';
import ManageClasses from '../components/dashboard/manageClasses/ManageClasses';
import ManageUsers from '../components/dashboard/manageUsers/ManageUsers';
import AddCourse from '../components/dashboard/addCourse/AddCourse';
import MyCourses from '../components/dashboard/myCourse/MyCourses';
import MyCart from '../components/dashboard/myCart/MyCart';
import PaymentHistory from '../components/dashboard/paymentHistory/PaymentHistory';
import CheckOut from '../components/dashboard/checkOut/CheckOut';
import Instructor from '../private/Instructor';
import Admin from '../private/Admin';
import Basic from '../private/Basic';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
      },
      {
        path: '/course_details',
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>,
      },
      {
        path: '/instructors_details',
        element: <InstructorsDetails></InstructorsDetails>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/contactus',
        element: <Contact></Contact>,
      },
      {
        path: '/signin',
        element: <Signin></Signin>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard',
        element: (
          <h1 className='bg-yellow-100 text-slate-600 p-20 capitalize rounded-full font-extrabold text-4xl'>
            Welcome to Dashboard
          </h1>
        ),
      },
      {
        path: '/dashboard/manageclasses',
        element: (
          <Admin>
            <ManageClasses></ManageClasses>
          </Admin>
        ),
      },
      {
        path: '/dashboard/manageusers',
        element: (
          <Admin>
            <ManageUsers></ManageUsers>
          </Admin>
        ),
      },
      {
        path: '/dashboard/addcourse',
        element: (
          <Instructor>
            <AddCourse></AddCourse>
          </Instructor>
        ),
      },
      {
        path: '/dashboard/mycourse',
        element: (
          <Instructor>
            <MyCourses></MyCourses>
          </Instructor>
        ),
      },
      {
        path: '/dashboard/mycart',
        element: (
          <Basic>
            <MyCart></MyCart>
          </Basic>
        ),
      },
      {
        path: '/dashboard/paymenthistory',
        element: (
          <Basic>
            <PaymentHistory></PaymentHistory>
          </Basic>
        ),
      },
      {
        path: '/dashboard/checkout',
        element: (
          <Basic>
            <CheckOut></CheckOut>
          </Basic>
        ),
      },
    ],
  },
  {
    path: '/demo',
    element: <Demo></Demo>,
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);

export default router;
