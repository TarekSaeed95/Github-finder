import { useEffect,useContext } from "react"
import {useParams, Link } from "react-router-dom"
import GithubContext from "../../context/Github/GithubContext"
import {FaCodepen,  FaMapMarkedAlt, FaStore, FaTwitter, FaUserFriends, FaUsers,FaBloggerB} from "react-icons/fa"
import ReposList from "../Repos/ReposList"
import image2 from "../../../imgs/96x96.svg"
function UserInfo() {
  const 
  {getUserAndReposData,clearUserInfo,loadingProfile,repos,
    user,user:{public_repos,public_gists,login,blog,avatar_url,type,html_url,following,name,followers,location,hireable,bio,twitter_username}}=useContext(GithubContext)
  const params = useParams()
  useEffect(()=>{
    getUserAndReposData(params.login)
  },[params.login]) 
  const loading=true
  return (Object.keys(user).length===0&&loadingProfile===false)? null : loadingProfile?(<div className="container">
            <div className="loading-screen absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <div className="w-fit h-fit">
              <img src={image2} className="" alt="" />
              </div>
           </div>
           </div>
           ):          
          ( <div className="sm:container mb-20  mx-4 ">
          <Link className="btn btn-outline btn-info  text-lg text-slate-200 mt-48 md:mt-28 mb-5" onClick={clearUserInfo} to="/">Back To Search</Link>
           <div className="grid grid-cols-1   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-5 text-slate-200">
            <div className="card  image-full 	 shadow-lg max-md:mb-8">
                <figure><img src={avatar_url} alt="avatar"/></figure>
                <div className="card-body justify-end">
                  <h2 className="card-title text-2xl text-slate-200 ">{name}</h2>
                  <div className=" text-xl text-slate-200">{login}</div>
                </div>
            </div>
         <div className=" col-span-2 xl:col-span-3 ml-5 ">
          {name&&<h2 className="text-3xl mr-3   inline">{name}</h2>}
         {type&&<span className="badge badge-success mr-3 space-x-1">{type}</span>}
         {hireable && <span className="badge badge-info">{hireable?"Available":"Busy"}</span>}
          <p className="my-3">{bio}</p>
          <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-outline text-lg text-slate-200">Visit Github profile</a>
         <div className="stats  w-full grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2  xl:grid-cols-3  grid-flow-dense 2xl:grid-flow-col-dense overflow-x-visible	  mt-10 shadow-2xl">
          {location&&(<div className="stat col-span-1">
              <div className="stat-title text-lg">
              <div className="flex items-center justify-between">
                  Location
                  <FaMapMarkedAlt className="text-lime-200"/>
              </div>
              </div>
              <div className="stat-value text-slate-200 text-2xl">
                
                 <a href={`https://www.google.com/maps/place/${location}`} target="_blank" rel="noreferrer">{location}</a> 
              </div>
              </div>)
              }
          {blog&&(<div className="stat col-span-1 ">
              <div className="stat-title text-lg">
              <div className="flex items-center justify-between">
                  Website
                  <FaBloggerB className=" text-orange-400"/>
                  </div>
              </div>
              <div className="stat-value text-slate-200 text-2xl text-ellipsis">
              <a href={`https://www.${blog}`} rel="noreferrer" className="text-ellipsis" target="_blank">
                <p className="text-ellipsis">{blog}</p></a>
              </div>
              </div>)
              }
          {twitter_username&&(<div className="stat col-span-1">
              <div className="stat-title text-lg">
                <div className="flex items-center justify-between">
                  Twitter 
                  <FaTwitter className=" text-info"/>
                </div>
              </div>
              <div className="stat-value text-slate-200 text-2xl">
                  <a href={`https://twitter.com/${twitter_username}`} rel="noreferrer" target="_blank">{twitter_username}</a>
              </div>
              </div>)
              }
         </div>
         </div>
      </div>
      <div className="stats grid sm:grid-cols-2 py-5 lg:grid-cols-4 w-full grid-flow-dense overflow-x-visible mt-10 shadow-2xl">
              {followers?(<div className="stat sm:col-span-1 ">
                <div className="text">
                  <div className="stat-title text-lg">
                    Followers
                  </div>
                  <div className="stat-value text-slate-200 text-4xl ">
                    {followers}
                  </div>
                </div>
                <div className="stat-figure">
                  <FaUsers className="text-primary text-5xl"/>
                </div>
              </div>):null}
             {following?( <div className="stat sm:col-span-1 ">
                <div className="text">
                  <div className="stat-title text-lg">
                    Following
                  </div>
                  <div className="stat-value text-slate-200 text-4xl ">
                    {following}
                  </div>
                </div>
                <div className="stat-figure">
                  <FaUserFriends className="text-primary text-5xl"/>
                </div>
              </div>):null}
              {public_repos?(<div className="stat sm:col-span-1 ">
                <div className="text">
                  <div className="stat-title text-lg">
                    Public Repos
                  </div>
                  <div className="stat-value text-slate-200 text-4xl ">
                    {public_repos}
                  </div>
                </div>
                <div className="stat-figure">
                  <FaCodepen className="text-primary text-5xl"/>
                </div>
              </div>):null}
              {public_gists?(<div className="stat sm:col-span-1 ">
                <div className="text">
                  <div className="stat-title text-lg">
                    Public Gist
                  </div>
                  <div className="stat-value text-slate-200 text-4xl ">
                    {public_gists}
                  </div>
                </div>
                <div className="stat-figure">
                  <FaStore className="text-primary text-5xl"/>
                </div>
              </div>):null}
             </div>
              <ReposList repos={repos}/>  
              </div> )

  
}

export default UserInfo