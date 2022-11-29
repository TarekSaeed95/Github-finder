import { useContext } from "react"
import ErrorContext from "../context/ErrorContext"

function Error() {
    const{type,msg}=useContext(ErrorContext)

  return (
    <div>{msg}</div>
  )
}

export default Error