import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Fade from "react-reveal"

const About = () => {
    return (
        <section id="about" className="relative px-14 py-8 lg:px-24 lg:py-24">
            <Fade>
                <Row className="justify-content-center">
                    <Col>
                        <div className="title text-center mb-5">
                            <h3 className="font-semibold text-3xl text-gray-800 mb-2">About <span className="text-yellow-500">Us</span></h3>
                            <p className="text-gray-800">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </Col>
                </Row>
                <Row className="flex flex-col mt-4 justify-center items-center lg:flex-row">
                    <Col className="px-4 py-4 mb-4">
                        <h2 className="font-medium text-blue-500 text-4xl mb-4">Lorem Ipsum has been the industry's standard dummy text</h2>
                    </Col>
                    <Col className="px-4 py-4 mb-4">
                        <h6 className="text-dark font-medium text-2xl mb-3">Our Mission</h6>
                        <p className="text-gray-700 font-medium">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    </Col>
                    <Col className="px-4 py-4 mb-4">
                        <h6 className="text-black font-medium text-2xl mb-3">Our Vision</h6>
                        <p className="text-gray-700 font-medium">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    </Col>


                </Row>
            </Fade>
        </section>
    )
}

export default About