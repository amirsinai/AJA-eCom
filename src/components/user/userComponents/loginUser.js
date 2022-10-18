import { Auth } from "aws-amplify"
import { Button, Form } from "react-bootstrap"


export default function loginUser(){
    let formInputState = { username: '', password: '', verificationCode: '' };

    async function signIn() {
        try {
          await Auth.signIn(formInputState.username, formInputState.password);
        } catch (err) { console.log({ err }); }
      }

    function onChange(e) {
      formInputState = { ...formInputState, [e.target.name]: e.target.value };
    }

    function checkUser(){
        console.log("Activated")
        Auth.currentAuthenticatedUser({
            bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => console.log(user))
        .catch(err => console.log(err));
    }
  
    return(
        <div>
            <Form>
                 <div>
                    <h2>Log-in to AJA-ecommerce</h2>
                </div>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="username" onChange={onChange}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={onChange}/>
                    </Form.Group>
                    <Button variant="primary" onClick={signIn}>
                        Login
                    </Button>
                </div>
                <Button onClick={checkUser()}>Check currentUser</Button>
            </Form>
        </div>
    )
}