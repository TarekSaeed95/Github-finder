import React from 'react'
import { useContext } from 'react'
import GithubContext from '../../context/Github/GithubContext'
import UserItem from './UserItem'
import { nanoid } from 'nanoid'
function UserList() {
    const{userList}=useContext(GithubContext)
const userElement=userList.map((user)=>
        (<UserItem key={nanoid()} user={user}></UserItem>)
    )
  return (

    <div className="user-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
    {userElement}
    </div>
  )
}

export default UserList
