import {createContext, useState} from "react"

const DataContext=createContext();
export function DataProvider({children}){
    const [searchName,setSearchName]=useState("")
    const [loading,setLoading]=useState(true)
    const [userList,setUserList]=useState([])

    function inputChangeHandler(e){
        setSearchName(e.target.value)

    }
    function clearHandler(){
        setUserList([])
    }
    const  searchHandler=async (e)=>{
        e.preventDefault()
        const params=new URLSearchParams({
            q:searchName
        })
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`)
        const {items}= await response.json()
        setUserList(items)
        console.log(userList)

    }

    return <DataContext.Provider value={{
        searchName,userList,loading,searchHandler,inputChangeHandler,clearHandler
    }}>{children}</DataContext.Provider>
}


export default DataContext