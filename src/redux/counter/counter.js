
// -- actions -- //
export const increment = () => {
    return {
        type: 'increment'
    }
}
export const decrement = () => {
    return {
        type: 'decrement'
    }
}

// -- reducer -- //

const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            return state 
    }
}

export default counterReducer