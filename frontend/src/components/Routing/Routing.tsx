import React from "react";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import Login from "../Login/Login";
import {Home} from "../Home/Home";
import CreateThread from "../CreateThread/CreateThread";
import Profile from "../Profile/Profile";


const Routing = () => {
    return (
        <Router>
            <Route exact path='/' component={Login}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/createThread' component={CreateThread} />
            <Route exact path='/profile' component={Profile} />
        </Router>
    )
}

export default Routing;