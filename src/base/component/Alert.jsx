import { useContext } from "react"
import AlertContext from "../context/Alert/AlertContext"

function Alert() {
    const{alert}=useContext(AlertContext)

    return alert.type!==null?
    (<div className={`flex gap-4 mb-3 items-center w-fit  px-5 py-3 alert ${alert.type==="error"?"alert-error":""} `} > 
      {alert.type==="error"&&(
      <svg
      fill='none'
      viewBox='0 0 24 24'
      className='w-7 h-7 mt-.5'>
      <circle cx="12" cy="12" r="12" fill="#FECDD3" ></circle>
      <path
        d='M8 8l8 8M16 8l-8 8'
        stroke='#B91C1C'
        strokeWidth='2'
      ></path>
    </svg>
)}
    <p className="text-2xl font-bold text-red-800 ">{alert.msg}</p>
    </div>
    ):null

  
  
}

export default Alert