// -- actions -- //
export const changeHeaderBarToBlue = () => {
    return {
        type: 'blue'
    }
}
export const changeHeaderBarToRed = () => {
    return {
        type: 'red'
    }
}
// -- reducer -- //
const ChangeHeaderBarColor = (state = {color: '#3949ab'}, action) => {
    switch(action.type){
        case 'blue':
            return state = {
                color: '#3949ab'
            }
        case 'red':
            return state = {
                color: '#b8201f'
            }
        default:
            return state 
    }
}
export default ChangeHeaderBarColor