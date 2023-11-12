import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute =({children})=>{
    const {user,loading} = useContext(AuthContext);
    const location  = useLocation();
    console.log(location);
    if(loading){
        return  <Spinner animation="grow" variant="dark" />
    }
    if(user){
        return children;
    }
    return(<Navigate state={{from:location}} to="/login" replace></Navigate>)
}

export default PrivateRoute;
/**
 * steps
 * check user is logged in or not
 * if user  is logged in,then allow then to visit the route
 * else redirect the user to the log in page
 * setup the private route
 * **/