import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa'
function RepoItem({repo}) {
    const {name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    }=repo
  return (
    <div className="bg-base-200 hover:bg-base-300 card">
        <div className="card-body text-slate-200">
            <a href={html_url} target="_blank" rel='noreferrer' className='text-xl w-fit'>
                <FaLink className='inline'/>
                <p className='inline ml-3 '>{description||name}</p>
            </a>
        <div className="badges flex gap-3 mt-5">
            <div className="badge badge-info badge-outline hover:bg-info hover:text-black hover:border-transparent ">
                <FaEye className=' mr-2'/>
                {watchers_count}
            </div>
            <div className="badge badge-success badge-outline  hover:bg-success hover:text-black hover:border-transparent">
                <FaStar className=' mr-2'/>
                {stargazers_count}
            </div>
            <div className="badge badge-error badge-outline hover:bg-error hover:text-black hover:border-transparent">
                <FaInfo className=' mr-2'/>
                {open_issues}
            </div>
            <div className="badge badge-warning badge-outline hover:bg-warning hover:text-black hover:border-transparent">
                <FaUtensils  className=' mr-2'/>
                {forks}
            </div>
        </div>
        </div>

    </div>
  )
}

export default RepoItem                                                                                