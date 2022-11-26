import{FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Header() {
  return (
      <nav className="navbar flex justify-between flex-col md:flex-row items-center bg-neutral p-3 text-slate-100 drop-shadow-xl		 ">
        <Link to='/'>
            <div className="logo text-2xl font-bold flex mb-3 md:mb-0  items-center gap-3 ">
            <FaGithub className='text-3xl'/> Github finder
            </div>
        </Link>
            <div className="links flex flex-col md:flex-row font-medium justify-end ">
                <Link to='/' className='btn btn-ghost text-lg rounded-btn'>
                    HOME
                </Link>
                <Link to='/about' className='btn btn-ghost text-lg'>
                    ABOUT
                </Link>
            </div>
      </nav>
  )
}

export default Header
