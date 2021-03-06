import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute(props) {
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    // -Daniel Shim
    return props.signedIn ? <Navigate to="/home" /> : <Navigate to="/signin" />;
}
export default PrivateRoute;