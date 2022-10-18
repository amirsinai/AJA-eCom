import { Auth } from "aws-amplify"
import { useState } from "react";
import { Button, Form } from "react-bootstrap"


export default function CreateUser(){
    let [emailStats, setEmailStats] = useState('')
    let [confirmStatus, setConfirmStatus] = useState(false)
    let [accStatus, setAccStatus] = useState(false)
    let formInputState = { username: '', password: '', verificationCode: '' };

    function onChange(e) {
        formInputState = { ...formInputState, [e.target.name]: e.target.value };
        console.log(formInputState.username)
      }

    //Sign in User Function
    async function signUp() {
        try {
        setEmailStats(formInputState.username)
        await Auth.signUp({
            username: formInputState.username,
            password: formInputState.password,
        });
        // setConfirmStatus(true)
        setAccStatus(true)
        } catch (err) { console.log({ err }); }
    }

    //Sign in Confirmation Function
    async function confirmSignUp() {
        try {
            setConfirmStatus(true)
          await Auth.confirmSignUp(emailStats, formInputState.verificationCode);
        } catch (err) { console.log({ err }); }
      }

      const handleSign = (e, term) =>{
        e.preventDefault()
        signUp()
    }
     const handleConfirm = (e, term) =>{
        e.preventDefault()
        confirmSignUp()
     }

        return(
            <div>
                {accStatus ?
                <div>
                    {confirmStatus?
                    <div>
                        <p>You have successfully created your Account!</p>
                        <a href="/login">
                            <button>Would you like to Log-In?</button>
                        </a>
                    </div>
                    :
                    <form>
                        <h1>Cofirm Sign Up</h1>
                        <p>We have sent a confirmation code to your email, please check your email for the code.</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" value={emailStats} name="username" readOnly/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="input" placeholder="Verification Code" name="verificationCode" onChange={onChange}/>
                        </Form.Group>
                        <Button variant="primary" onClick={handleConfirm}>
                            Confirm Sign Up
                        </Button>
                    </form>
                        }
                </div>
                :
                    <Form>
                        <h1>Sign Up</h1>
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
                        <Button variant="primary" onClick={handleSign}>
                            Create Account
                        </Button>
                    </Form>
                }
            </div>
        )
    }

