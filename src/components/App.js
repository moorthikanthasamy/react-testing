import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Page_404 from "./Page_404";
import initReq from "../store/action";

const App = props => {

    props.dispatch(initReq())
    return <React.Fragment>
        <NavBar></NavBar>
        <div className="container-fluid">
            <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/home' exact component={Home} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/auth/:name' component={Login} />
                <Route component={Page_404} />
            </Switch>
            {props.appName}
        </div>
    </React.Fragment>
}
const mapStateToProps = state => {
    return state;
}
export default connect(mapStateToProps)(App);