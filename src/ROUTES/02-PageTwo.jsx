import React, {useContext} from "react";

import { UserContext } from "./index";




export const PageTWO = () => {

   

    const {checking} = useContext(UserContext)

    
    
    return(
            <>
                <h1>PageTwo</h1>
                <p>this page is a private route</p>
                


            </>
            
        )
}