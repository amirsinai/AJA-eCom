import { useState ,useEffect } from "react";
import { Auth } from "aws-amplify";

import createUser from './userComponents/createUser'
import loginUser from './userComponents/loginUser'


export default function account(){
    const [userState, setUserState ] = useState([])
 


    Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => setUserState = true)
    .catch(err => console.log(err));
    
    return(
        <div>

        </div>
    )
}