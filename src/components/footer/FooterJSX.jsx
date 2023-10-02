import { Link } from 'react-router-dom';
import Vite from '../../assets/react.svg';

const FooterJSX = () => {
  return (
    <footer className='footer bg-[#FFF2CC] p-10  text-base-content'>
      <aside>
        <img
          className='w-[10rem] md:w-[16rem] lg:w-[20rem] '
          src={Vite}
          alt='logoSVG'
        />
        <p>
          summer.camp-education performance.
          <br />
          <span className='underline'>newCopywrite@-2023</span>
        </p>
      </aside>
      <nav className=''>
        <header className='footer-title font-bold'>SOCIETY-CONNECTION</header>
        <Link to={'https://github.com/14HAK'} className='link link-hover'>
          <span className='text-slate-400 font-thin underline'>Github</span>
        </Link>
        <Link className='link link-hover'>
          <span
            to={'https://www.linkedin.com/in/dulon-mahadi-mern/'}
            className='text-slate-400 font-thin underline'
          >
            LinkedIn
          </span>
        </Link>
        <Link className='link link-hover'>
          <span className='text-slate-400 font-thin underline'>Twitter</span>
        </Link>
        <Link className='link link-hover'>
          <span className='text-slate-400 font-thin underline'>Dribble</span>
        </Link>
      </nav>
      <nav>
        <header className='footer-title font-bold'>APPEARANCE</header>
        <Link className='link link-hover'>Terms of use</Link>
        <Link className='link link-hover'>Privacy policy</Link>
        <Link className='link link-hover'>Cookie policy</Link>
      </nav>
    </footer>
  );
};

export default FooterJSX;
