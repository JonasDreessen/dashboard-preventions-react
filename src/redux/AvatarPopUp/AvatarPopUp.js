// -- actions -- //
export const AvatarOpen = () => {
    return {
        type: 'open'
    }
}
export const AvatarClose = () => {
    return {
        type: 'close'
    }
}
// -- reducer -- //
const AvatarPopUpSwitcher = (state = false, action) => {
    switch(action.type){
        case 'open':
            return state = true
        case 'close':
            return state = false
        default:
            return state 
    }
}
export default AvatarPopUpSwitcher