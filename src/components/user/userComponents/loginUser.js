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
  
    return(
        <div>
            <Form>
                 <div>
                    <h2>Welcome to the AJA-ecommerce!</h2>
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
            </Form>
        </div>
    )
}