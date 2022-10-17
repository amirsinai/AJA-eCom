import { withAuthenticator } from '@aws-amplify/ui-react'
import { Authenticator, Greetings } from '@aws-amplify/ui-react';

import {Amplify, Auth} from "aws-amplify"
import awsconfig from '../aws-exports'

Amplify.configure(awsconfig)

async function signUp() {
    try {
        const { user } = await Auth.signUp({
            username: "angelabat25@gmail.com",
            password: "Test123!",
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
  }
  
  async function signIn() {
      try {
          const user = await Auth.signIn("angelabat25@gmail.com", "Test123!");
          console.log(user)
      } catch (error) {
          console.log('error signing in', error);
      }
  }
  
  async function signOut() {
      try {
          console.log(Auth)
          await Auth.signOut();
          console.log(Auth)
      } catch (error) {
          console.log('error signing out: ', error);
      }
  }
  

  Auth.currentAuthenticatedUser({
      bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  }).then(user => console.log("The user is authenticated: ", user))
  .catch(err => console.log(err));

function PremiumPage(){
    return(
        <div>
          <button onClick={signUp}>Sign up</button>
          <button onClick={signIn}>Sign in</button>
          <button onClick={signOut}>Sign Out</button>
          <h2>PremiumPage</h2>
        </div>
    );
};

export default PremiumPage ;