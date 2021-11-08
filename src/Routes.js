import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import About from "./About/About";
import Calendar from "./Calendar/Calendar";
import Home from "./Home/Home";
import history from './history';
import AttendMeet from "./Calendar/AttendMeet";
import ScheduleMeet from "./Calendar/ScheduleMeet";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} exact/>
                    <Route path="/Calendar" component={Calendar} exact/>
                    <Route path="/AttendMeet" component={AttendMeet} exact/>
                    <Route path="/ScheduleMeet" component={ScheduleMeet} exact/>
                    <Route path="/Logout"  exact>
                        <Redirect to ='/'/>
                        </Route>
                </Switch>
            </Router>
        )
    }
}
