import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import YourTeam from './components/dashboard/yourTeam/yourTeam'
import NavigationBar from './components/navigationbar/navigationbar'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route path='/' component={NavigationBar} />
            <Route exact path="/" component={App} />
            <Route path="/YourTeam" component={YourTeam} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
