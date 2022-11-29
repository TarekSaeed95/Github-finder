import { createContext, useReducer } from "react";
import reducer from "./GithubReducers";
const ErrorContext=createContext()
export function ErrorProvider({children}){
    const initialState={type:"",msg:""}
    const [state,dispatch]=useReducer(reducer,initialState)
     function genError(type,msg){
        dispatch({
            type:"EMPTY_INPUT_ERROR",
            payload:{
                type:type,msg:msg
            }
        })
    }
    return <ErrorContext.Provider value={
       { ...state,genError
        }
    }>
        {children}
    </ErrorContext.Provider>

}
export default ErrorContext