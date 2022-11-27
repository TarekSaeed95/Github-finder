import React from 'react'
import DataContext from '../../context/DataContext'
import { useContext } from 'react'
import UserList from '../UserList'
function Home() {
        const{inputChangeHandler,searchHandler}=useContext(DataContext)
  return (
    <div className="flex flex-col container p-8 container p-8 h-screen">
      <div className="grid  grid-cols-1 md:grid-cols-2 items-center">
          <form action="">
        <div className="form-control relative ">
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
        </div>
          </form>
      </div>
      <UserList></UserList>
      </div>
  )
}

export default Home
