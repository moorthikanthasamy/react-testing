import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const loggedIn = 'Guest';
    return <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to='/home' className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/auth/${loggedIn}`} className="nav-link">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </React.Fragment>
}
export default NavBar;