function reducer(state,action){
    switch(action.type){
        case "input-change-Handler" : return {...state,searchName:action.payload}
        case "clear": return{...state,userList:action.setUser,searchName:action.modifySearch}
        case "submit": return {...state,loading:false,userList:action.fetching}
        case "setLoading":return {...state,loading:true}
        default :console.log("default") 


        break;
    }
}
export default reducer 