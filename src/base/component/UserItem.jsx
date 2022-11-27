import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

function UserItem({user:{login,avatar_url,html_url}}) {
    // const {user:{login}}=useContext(DataContext)
    
  return (
<div className="card w-96 bg-base-800 shadow-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
  <figure><img src={avatar_url} alt="profile picture"/></figure>
  <div className="card-body">
    <h2 className="card-title">{login}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
        <a className="btn btn-primary" href={html_url}>
        Visit profile
        </a>
    </div>
  </div>
</div>
  )
}

export default UserItem
