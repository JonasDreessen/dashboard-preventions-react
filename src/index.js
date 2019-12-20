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
import { createStore } from 'redux'
import rootReducer from './redux/reducers/index'
import {Provider} from 'react-redux'

// -- STORE -- // 
const store = createStore(rootReducer) 
const routing = (
    <Router>
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
