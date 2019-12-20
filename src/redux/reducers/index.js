import counterReducer from './counter'
import loggedReducer from './isLogged'
import navigationFocusser from './navigationFocusser'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    counterReducer,
    loggedReducer,
    navigationFocusser
})

export default rootReducer
