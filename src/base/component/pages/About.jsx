import React from 'react'

function About() {
  return (
    <div className=' about-screen flex items-center sm:text-lg ml-4 sm:ml-12 mr-auto '
     >
      <div className="text-holder text-slate-200 flex flex-col gap-2">
        
      <h2 className=" text-4xl sm:text-6xl">Github Finder
      </h2>
      <p>
        A React App to search GitHub profiles and see profile details.
      </p>
      <p><span className="text-slate-500">Version:</span> 1.0.0</p>
      <p><span className="text-slate-500">Layout By:</span> Tarek Fakhr-eldeen</p>
      </div>
    </div>
  )
}

export default About
