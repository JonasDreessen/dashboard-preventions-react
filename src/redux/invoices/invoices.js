// -- actions -- // 

export const addNewInvoice = (payload) => {
    return {
        type: 'invoice',
        payload: payload
    }
}

// -- initial state -- // 
const INITIAL_STATE = []
// -- reducers -- // 

const InvoiceAdder = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'invoice':
            console.log(state, 'inside reducers invoice adder boi', action.payload)
            return [...state, [action.payload]]
        default:
            return state
    }    
}

export default InvoiceAdder