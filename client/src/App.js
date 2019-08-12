import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Landing} from "./components/Landing";
import {Login} from "./components/login";
import {Register} from "./components/register";
import {Profile} from "./components/profile";
import {Item} from "./components/item";


export function App() {
    return (
        <Router>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/my_items" component={Item}/>
        </Router>
    )
}
