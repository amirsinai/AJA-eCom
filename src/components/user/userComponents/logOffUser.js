import { Auth } from "aws-amplify";

export default function logoff(){

    async function signOut() {
        try {
            console.log(Auth)
            await Auth.signOut();
            console.log(Auth)
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    
    return(
        <button onClick={signOut}/>
    )
}