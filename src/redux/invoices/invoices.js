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
            return [...state, [action.payload]]
        default:
            return state
    }    
}

export default InvoiceAdder