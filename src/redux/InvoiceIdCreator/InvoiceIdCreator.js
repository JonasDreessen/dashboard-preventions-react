
// -- actions -- //
export const increment = () => {
    return {
        type: 'increment'
    }
}
// -- reducer -- //
const InvoiceIdCreator = (state = 0, action) => {
    switch(action.type){
        case 'increment':
            return state + 1
        default:
            return state 
    }
}
export default InvoiceIdCreator