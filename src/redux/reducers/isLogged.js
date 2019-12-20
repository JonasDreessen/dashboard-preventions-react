const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return !state
        default:
            return null
    }
}
export default loggedReducer