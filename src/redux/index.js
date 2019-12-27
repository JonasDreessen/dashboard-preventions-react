import InvoiceIdCreator from './InvoiceIdCreator/InvoiceIdCreator'
import navigationFocusser from './navigationFocus/navigationFocus'
import invoiceAdder from './invoices/invoices'
import {combineReducers} from 'redux'

// -- assembling the reducers -- // 
const rootReducer = combineReducers({
    InvoiceIdCreator,
    navigationFocusser,
    invoiceAdder
})

export default rootReducer
