import { Link } from "react-router-dom"
import {FaHome} from 'react-icons/fa'
function NotFound() {
  return (
    <div className="container notfound-screen flex items-center justify-center">
      <div className="text-holder text-slate-200 flex flex-col gap-5">
      <h2 className="hero font-bold text-8xl">Oops!</h2>
      <p className="text-4xl font-semibold ">404-page not found!</p>
      <Link to="/" className="mx-auto">
      <button className="btn btn-primary bt-lg "><FaHome className="mr-3" />Back To Home</button>
      </Link>
      </div>  
    </div>
  )
}


export default NotFound
