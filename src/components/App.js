import React from "react";
import { Route, Switch } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Page_404 from "./Page_404";

const App = () => {

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
        </div>
    </React.Fragment>
}
export default App;