import React from 'react'
import { Link } from 'react-router-dom'
function UserItem({user:{login,avatar_url,html_url}}) {
  return (
<div className="card flex flex-row bg-gray-700  compact  items-center px-5 shadow-xl">
  <div className='rounded-full overflow-hidden	w-14 h-14'>
    <img className='max-w-full' src={avatar_url} alt="profile_picture"/>
    </div>
  <div className="card-body">
    <h2 className="card-title text-slate-100">{login}</h2>
        <Link  to={`/user/${login}`}>
        Visit profile
        </Link>
  </div>
</div>
  )
}

export default UserItem
