import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import CovidTracker from "./CovidTracker";
import CovidForm from "./CovidForm";
import Modal from "./Modal";
import History from "./History";


export default class Routes extends Component {
    render() {
        return (
            <Router history={History}>
                <Switch>
                    <Route path="/" exact component={Modal} />
                    <Route path="/CovidTracker" component={CovidTracker} />
                    <Route path="/CovidForm" component={CovidForm} />
                </Switch>
            </Router>
        )
    }
}