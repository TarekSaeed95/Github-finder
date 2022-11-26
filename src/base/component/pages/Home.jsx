import React from 'react'

function Home() {
  return (
      <div className="container p-8 grid grid-rows grid-cols-1 md:grid-cols-2 h-screen  items-center">
          <form action="">
        <div className="form-control relative ">
            <input
             type="text"
              name="name"
               placeholder='Enter search name'
               className='input w-full input-lg bg-gray-200 text-black'/>
            <button className='btn btn-lg w-36 rounded-l-none absolute top-0 right-0' type="submit">GO</button>
        </div>
          </form>
      </div>
  )
}

export default Home
