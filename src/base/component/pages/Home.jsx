import React from 'react'
import DataContext from '../../context/DataContext'
import { useContext } from 'react'
import UserList from '../UserList'
function Home() {
        const{userList,inputChangeHandler,searchHandler,clearHandler}=useContext(DataContext)
  return (
    <div className={`flex flex-col  container p-8 mx-auto container p-8 h-screen ${userList.length===0&&"justify-center"}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2  items-center mb-5">
          <form action="">
        <div className="form-control relative flex flex-row justify-between ">
            <input
             type="text"
              name="name"
               placeholder='Enter search name'
               onChange={(e)=>{inputChangeHandler(e)}}
               className='input w-full input-lg bg-gray-200 text-black focus:outline-none	'/>
            <button className='btn btn-lg w-36 rounded-l-none absolute top-0 right-0' 
            type="submit" 
            onClick={(e)=>searchHandler(e)}
            >GO</button>
            <button onClick={clearHandler} className='btn btn-warning btn-lg  translate-x-4'>Clear</button> 
        </div>
          </form>
      </div>
     {userList.length>0&&<UserList></UserList>}

      </div>
  )
}

export default Home
