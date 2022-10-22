import { Button, Form } from "react-bootstrap"
import { DataStore } from "aws-amplify";
import {  useState } from "react";
import { useParams } from "react-router-dom";

import { Reviews } from "../../models"

export default function CreateReview(){
    const { id } = useParams()
    let [formData, setFormData] = useState({ Rating: 0, Comment: "", productsID: `${id}`})
    let [stateCheck, setStateCheck] = useState(false)

    async function createComment(){
        await DataStore.save(
            new Reviews(formData)
        )
        console.log("Successfully created post")
        setStateCheck(true)
            this.preventDefault()
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formData)
        createComment()
    }

    const handleMore = e =>{
        e.preventDefault()
        setStateCheck(false)
    }

    return(
        <div>
            {stateCheck ?
            <div>
                <h3>You have Successfully created a post</h3>
                <button onSubmit={handleMore}>Create another one?</button>
            </div>
            :
            <Form onSubmit={handleSubmit}>
                <h3>Add your own Review</h3>
                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control required type="number" placeholder="1-5" name="Rating" max="5" min="0" onChange={e => setFormData({ ...formData, 'Rating': parseInt(e.target.value)})}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control type="text" placeholder="Comments" name="Comment" max="555" onChange={e => setFormData({ ...formData, 'Comment': e.target.value}, )}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Post Review
                </Button>
            </Form>
            }
        </div>
    )
};