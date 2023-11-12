import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useState } from "react";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const handleRegister = (event) => {
        event.preventDefault();
        console.log('submit button clicked on register');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }
    return (
        <div>
            <Container className="w-25 mx-auto">
                <h3>Register kar bolti keya!!!</h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" required placeholder="Enter your name" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo url</Form.Label>
                        <Form.Control type="text" name="photo" placeholder="Enter a photo url" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" required placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={handleAccepted}
                            type="checkbox"
                            name="accept"
                            label={<>Accept <Link to="/terms">Terms & Conditions</Link></>} />
                    </Form.Group>
                    <Button variant="primary" disabled={!accepted} type="submit">
                        Register
                    </Button> <br />
                    <Form.Text className="text-secondary">
                        Already have an account?    <Link to="/login">Login</Link>
                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </Container>
        </div>
    )
}

export default Register;