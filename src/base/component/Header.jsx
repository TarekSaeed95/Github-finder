import{FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import GithubContext from "../context/Github/GithubContext"
function Header() {
    const {clearHandler}=useContext(GithubContext)
  return (
      <nav className="navbar absolute flex justify-between flex-col md:flex-row items-center bg-neutral p-3 text-slate-100 drop-shadow-xl">
        <Link to='/' onClick={clearHandler}>
            <div className="logo text-2xl font-bold flex mb-3 md:mb-0  items-center gap-3 ">
            <FaGithub className='text-3xl'/> Github finder
            </div>
        </Link>
            <div className="links flex flex-col md:flex-row font-medium justify-end ">
                <Link onClick={clearHandler} to='/'  className='btn btn-ghost text-lg rounded-btn'>
                    HOME
                </Link>
                <Link to='/about' onClick={clearHandler} className='btn btn-ghost text-lg'>
                    ABOUT
                </Link>
            </div>
      </nav>
  )
}

export default Header
