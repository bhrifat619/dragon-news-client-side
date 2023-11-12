import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <Container>
            <h2>
                Aceept car laude nehito gum kar dunga
            </h2>
            <p>Go back to <Link to="/register">Register</Link></p>
        </Container>
    )
}

export default Terms;