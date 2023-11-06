import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png"
import './rightnav.css'
const RightNav = () => {
    return (
        <div>
            <h2>Log in with</h2>
            <Button className="mb-2" variant="outline-primary"> <FaGoogle /> Log in with google</Button>{''}
            <Button variant="outline-secondary"> <FaGithub /> Log in with github</Button>
            <div className="mt-4">
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook />Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div style={{ backgroundImage: `url(${bg})` }} className="create-news text-white p-5 rounded text-center">
                <h4>Create an amazing NewsPaper</h4>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger">Learn More</Button>
            </div>

        </div>
    )
}
export default RightNav;