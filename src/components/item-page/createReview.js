import { Button, Form } from "react-bootstrap"

export default function CreateReview(){

    let formInputState = { review: 0, comment: '', verificationCode: '' };

    function onChange(e) {
        formInputState = { ...formInputState, [e.target.name]: e.target.value };
      }

    function postResult(){
        
    }

    

    const postStage = (e, term) =>{
        e.preventDefault()
    }



    return(
        <div>
            <Form action={postStage()}>
                <h1>Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="number" placeholder="Enter email" name="review" onChange={onChange}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Password" name="comment" onChange={onChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>
        </div>
    )
};