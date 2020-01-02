// -- actions -- //
export const changeToMale = () => {
    return {
        type: 'male'
    }
}
export const changeToFemale = () => {
    return {
        type: 'female'
    }
}
// -- reducer -- //
const ChangeAvatarSex = (state = {male: true}, action) => {
    switch(action.type){
        case 'male':
            return state = {
                male: true
            }
        case 'female':
            return state = {
                male: false
            }
        default:
            return state 
    }
}
export default ChangeAvatarSex