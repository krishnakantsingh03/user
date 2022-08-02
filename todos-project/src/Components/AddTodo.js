import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addUser } from "../Service/User";

const AddTodo = ({onAdd}) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const onUserNameChange = (e) => {
        setUsername(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const submit = async (e) => {
        console.log(username, email);
        e.preventDefault();
        if(!username  || !email){
            return toast.warning("Please fill required fields");
        }

        const payload = {
            username : username,
            email : email
        }
        const response = await addUser(payload);
        console.log('Response', response);
        onAdd({username : username, email : email});
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
            <Form onSubmit={submit} className="input-container">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" onChange={onUserNameChange} value={username} placeholder="Username " />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={onEmailChange} placeholder="Email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add User
                </Button>
            </Form>
        </>
    )
}

export default AddTodo;