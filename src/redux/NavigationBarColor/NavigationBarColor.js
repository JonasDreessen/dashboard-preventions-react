// -- actions -- //
export const changeNavigationBarGray = () => {
    return {
        type: 'gray'
    }
}
export const changeNavigationBarLightGray = () => {
    return {
        type: 'lightgray'
    }
}
// -- reducer -- //
const ChangeNavigationBarColor = (state = {color: '#2b2b2b', textcolor: '#c8c8c8'}, action) => {
    switch(action.type){
        case 'gray':
            return state = {
                color: '#2b2b2b',
                textcolor: '#c8c8c8'
            }
        case 'lightgray':
            return state = {
                color: '#c8c8c8',
                textcolor: '#2b2b2b'
            }
        default:
            return state 
    }
}
export default ChangeNavigationBarColor