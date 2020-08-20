import React from "react";
const Login = props => {
    const { name } = props.match.params;
    function onClickHandler() {
        props.history.push('/contact')
    }
    return <React.Fragment>
        <h2>Hello, You logged in as {name} </h2>
        <button type="button" className="btn btn-warning" onClick={onClickHandler}>Go to Contact</button>
    </React.Fragment>
}
export default Login;