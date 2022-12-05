import React from 'react'

function About() {
  return (
    <div className='container about-screen   flex items-center text-lg'
     >
      <div className="text-holder text-slate-200 flex flex-col gap-2">

      <h2 className="text-6xl">Github Finder
      </h2>
      <p>
        A React App to search GitHub profiles and see profile details. This project is part of the React Front To Back Udemy course by Brad Traversy
      </p>
      <p><span className="text-slate-500">Version:</span> 1.0.0</p>
      <p><span className="text-slate-500">Layout By:</span> Tarek S.Ahmed</p>
      </div>
    </div>
  )
}

export default About
