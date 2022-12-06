import React from "react";
import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
    const token = localStorage.getItem("jwt");
    return (
        <Route>
            {() =>
                props.loggedIn || token  ? <Component {...props} /> : <Redirect to="/"/>
            }
        </Route>
    );
};

export default ProtectedRoute;