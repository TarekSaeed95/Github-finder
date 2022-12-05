import { createContext, useReducer } from "react";
import reducer from "../Github/GithubReducers";
const AlertContext=createContext()
export function AlertProvider({children}){
    const initialState={
        alert:{type:null,msg:null}
    }
    const [state,dispatch]=useReducer(reducer,initialState)
     function genAlert(type,msg){
        dispatch({
            type:"EMPTY_INPUT_ERROR",
            payload:{
                type:type,msg:msg
            }
        })
        setTimeout(()=>{
            dispatch({
                type:"REMOVE_ALERT",
                payload:{
                    type:null,msg:null
                }
            })
        },3000)

    }
    return <AlertContext.Provider value={
       {...state,genAlert
        }
    }>
        {children}
    </AlertContext.Provider>

}
export default AlertContext