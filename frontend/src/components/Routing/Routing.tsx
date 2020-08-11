import React from "react";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import Login from "../Login/Login";
import {Home} from "../Home/Home";

const Routing = () => {
    return (
        <Router>
            <Route exact path='/' component={Login}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/home' component={Home}/>
        </Router>
    )
}

export default Routing;