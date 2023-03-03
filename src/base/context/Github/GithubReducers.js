function reducer(state, action) {
  switch (action.type) {
    case "INPUT_CHANGE_HANDLER":
      return { ...state, searchName: action.payload };
    case "SUBMIT":
      return { ...state, loading: false, userList: action.payload };
    case "USER_AND_REPOS":
      return {
        ...state,
        user: action.payload.userData,
        repos: action.payload.reposData,
        loadingProfile: false,
      };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "LOADING_PROFILE":
      return { ...state, loadingProfile: true };
    case "CLEAR":
      return {
        ...state,
        userList: action.payload.setUser,
        searchName: action.payload.modifySearch,
      };
    case "CLEAR_USER_INFO":
      return { ...state, user: {}, repos: [] };
    case "EMPTY_INPUT_ERROR":
      return { ...state, alert: action.payload };
    case "REMOVE_ALERT":
      return { ...state, alert: action.payload };
    default:
      break;
  }
}
export default reducer;
