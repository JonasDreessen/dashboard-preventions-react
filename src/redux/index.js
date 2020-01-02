import InvoiceIdCreator from './InvoiceIdCreator/InvoiceIdCreator'
import navigationFocusser from './navigationFocus/navigationFocus'
import invoiceAdder from './invoices/invoices'
import AvatarPopUpSwitcher from './AvatarPopUp/AvatarPopUp'
import ChangeHeaderBarColor from './HeaderBarColor/HeaderBarColor'
import ChangeNavigationBarColor from './NavigationBarColor/NavigationBarColor'
import ChangeAvatarSex from './ChangeSex/ChangeSex'
import {combineReducers} from 'redux'

// -- assembling the reducers -- // 
const rootReducer = combineReducers({
    InvoiceIdCreator,
    navigationFocusser,
    invoiceAdder,
    AvatarPopUpSwitcher,
    ChangeHeaderBarColor,
    ChangeNavigationBarColor,
    ChangeAvatarSex
})

export default rootReducer
