import React, { useContext } from "react";
import {Navigate} from "react-router-dom"

import {UserContext}  from './index.js';



export const PublicRoutes = ({children}) => {

    const {logged} = useContext(UserContext);

    return(!logged)
        ? children
        : <Navigate to="/two"></Navigate>
}