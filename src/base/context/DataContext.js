import { useContext } from "react";
import {useReducer, createContext} from "react"
import ErrorContext from "./ErrorContext";
import reducer from "./GithubReducers";
const DataContext=createContext();
export function DataProvider({children}){
    const{genError}=useContext(ErrorContext)
    const initialState={
        searchName:"",
        loading:false,
        userList:[]
    }
    const[state,dispatch]=useReducer(reducer,initialState)
    function inputChangeHandler(e){
        dispatch({
            type:"input-change-Handler",
            payload:e.target.value
        })
    }
    function clearHandler(e){
        e.preventDefault()
        dispatch({
            type:"clear",
            setUser:[],
            modifySearch:""
        })
    }
    const  searchHandler=async (e)=>{
        e.preventDefault()
        if(state.searchName===""){
            genError("error","Try to put name")
        }
        if(state.searchName!==""){
            dispatch({
                type:"setLoading",
            })
            const params=new URLSearchParams({
                q:state.searchName
            })
            const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`)

            
            const {items}= await response.json()
            dispatch({
                type:"submit",
                fetching:items,
            })
        }

    }

    return <DataContext.Provider value={{
        searchName:state.searchName,userList:state.userList,loading:state.loading,searchHandler,inputChangeHandler,clearHandler
    }}>{children}</DataContext.Provider>

}

export default DataContext