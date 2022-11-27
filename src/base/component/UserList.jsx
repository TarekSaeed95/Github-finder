import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import UserItem from './UserItem'

function UserList() {
    const{userList}=useContext(DataContext)
    console.log(userList);
const userElement=userList.map((user)=>
        (<UserItem user={user}></UserItem>)
    )
  return (

    <div className="user-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
    {userElement}
    </div>
  )
}

export default UserList
