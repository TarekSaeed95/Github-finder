import React from 'react'
import DataContext from '../../context/DataContext'
import { useContext } from 'react'
import UserList from '../UserList'
import Image from "../../../imgs/YlWC.gif"
function Home() {
        const{loading,searchName,userList,inputChangeHandler,searchHandler,clearHandler}=useContext(DataContext)
  return (
    <div className={`flex flex-col container p-8 mx-auto container p-8 h-screen ${userList.length===0&&"justify-center"}`}>
      <div className="grid grid-cols-1 md:grid-cols-2  items-center mb-5">
          <form action="">
        <div className="form-control relative flex  md:flex-row flex-col   flex-row justify-between ">
            <input
             type="text"
              name="name"
              value={searchName}
               placeholder='Enter search name'
               onChange={(e)=>{inputChangeHandler(e)}}
               className='input w-full input-lg mb-5 md:mb-0 bg-gray-200 text-black focus:outline-none	'/>
            <button className='btn btn-lg w-36 rounded-l-none absolute top-0 right-0' 
            type="submit" 
            onClick={(e)=>searchHandler(e)}
            >{loading?<img className="w-16"  src={Image} alt="spinner"/>:"GO"}</button>
            
            {searchName.length>0 &&<button onClick={(e)=>clearHandler(e)}
             className='clear btn btn-warning btn-lg w-36 mx-auto md:absolute'>
              Clear</button> }
        </div>
          </form>
      </div>
     {userList.length>0&&<UserList/>}

      </div>
  )
}

export default Home
