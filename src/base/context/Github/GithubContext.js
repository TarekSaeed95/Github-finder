import { useContext } from "react";
import {useReducer, createContext} from "react"
import AlertContext from "../Alert/AlertContext";
import reducer from "./GithubReducers";
import axios from "axios";
const githubGetter=axios.create({baseURL:process.env.REACT_APP_GITHUB_URL,headers:{
    Authorization:`token${process.env.REACT_APP_GITHUB_TOKEN}` 
    }
})
const GithubContext=createContext();
export function GithubProvider({children}){
    const{genAlert}=useContext(AlertContext)
    const initialState={
        searchName:"",
        loading:false,
        userList:[],
        user:{},
        repos:[],
        loadingProfile:false
    }
    const[state,dispatch]=useReducer(reducer,initialState)
    function inputChangeHandler(e){
        dispatch({
            type:"INPUT_CHANGE_HANDLER",
            payload:e.target.value,
        })
    }
    function clearHandler(){
        dispatch({
            type:"CLEAR",
           payload:{
            setUser:[],
            modifySearch:""
           } 
        })
    }
    
    const  searchHandler=async (e)=>{
        e.preventDefault()
        if(state.searchName===""){
            genAlert("error","Try to put name")
        }
        if(state.searchName!==""){
            dispatch({
                type:"SET_LOADING",
            })
            const params=new URLSearchParams({
                q:state.searchName
            })
            const response= await githubGetter.get(`/search/users?${params}`)
            const data= response.data.items
            dispatch({
                type:"SUBMIT",
                payload:data,
            })
        }
    }
    async function getUserAndReposData(name){
         dispatch({
            type:"LOADING_PROFILE",
         })   
           const [userData,reposData]=await Promise.all(
            [githubGetter.get(`/users/${name}`),
            githubGetter.get(`/users/${name}/repos`)]
           )
           
            dispatch({
                type:"USER_AND_REPOS",
                payload:{userData:userData.data,reposData:reposData.data}
            })    
    }
    function clearUserInfo(){
        dispatch({
            type:"CLEAR_USER_INFO"
        })
    }
    return <GithubContext.Provider value={{
        ...state,clearUserInfo,getUserAndReposData,searchHandler,inputChangeHandler,clearHandler
    }}>{children}</GithubContext.Provider>

}
export default GithubContext