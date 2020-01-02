import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import YourTeam from './components/dashboard/yourTeam/yourTeam'
import NavigationBar from './components/navigationbar/navigationbar'
import Incidents from './components/dashboard/Incidents/Incidents'
import * as serviceWorker from './serviceWorker';
import IncidentSettings from './components/dashboard/IncidentSettings/IncidentSettings';
import HelpAndSupport from './components/dashboard/HelpAndSupport/HelpAndSupport';
import Settings from './components/dashboard/Settings/Settings';
import Invoices from './components/dashboard/Invoices/Invoices'
import InvoiceDetails from './components/dashboard/Invoices/InvoiceDetails'
import EmptyInvoice from './components/dashboard/Invoices/emptyInvoice'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './redux/index'
import {Provider} from 'react-redux'
import {Helmet} from 'react-helmet'
import Favicon from 'react-favicon'
// to use the saga, you need to import it in to the index.js file. Same principal as the reducers, there must be a combineSaga's to clean the code up a little bit.
// then the saga needs to be imported in to the sagamiddleware.run(here comes the saga action)
// -- SAGA -- // 
const sagaMiddleWare = createSagaMiddleware()
// -- STORE -- // 
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))
// sagaMiddleWare.run()
// -- App routing -- //
const routing = (
    <Router>
    <Favicon url='../images/pointbreak-favicon.png'/>
        <Helmet>
            <title>Prevention dashboard</title>
        </Helmet>
        <div>
            <Route path='/' component={NavigationBar} />
            <Route exact path="/" component={App} />
            <Route path='/Incidents' component={Incidents} />
            <Route path='/Invoices' component={Invoices} /> 
            <Route path="/YourTeam" component={YourTeam} />
            <Route path='/IncidentSettings' component={IncidentSettings} />
            <Route path='/HelpAndSupport' component={HelpAndSupport} />
            <Route path='/Settings' component={Settings} />
            <Route path='/InvoiceDetails' component={InvoiceDetails} />
            <Route path='/newInvoice' component={EmptyInvoice} />
        </div>
    </Router>
)
ReactDOM.render(
    <Provider store={store}>
        {routing}
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
