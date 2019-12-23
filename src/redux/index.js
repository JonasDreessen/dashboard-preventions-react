import counterReducer from './counter/counter'
import navigationFocusser from './navigationFocus/navigationFocus'
import invoiceAdder from './invoices/invoices'
import {combineReducers} from 'redux'

// -- assembling the reducers -- // 
const rootReducer = combineReducers({
    counterReducer,
    navigationFocusser,
    invoiceAdder
})

export default rootReducer
