import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/shared/leftnav/LeftNav";
import RightNav from "../pages/shared/rightnav/RightNav";

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>     
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default NewsLayout;