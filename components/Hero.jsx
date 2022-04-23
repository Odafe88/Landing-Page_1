import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Slider from "../assets/slider.svg";
import Fade from "react-reveal"

const Hero = () => {
    return (
        <section className="relative px-10 py-8 lg:px-24 lg:py-14">
            <Fade>
                <Row className="flex flex-col-reverse justify-center items-center lg:flex-row">
                    <Col lg={6} >
                        <div className="lg:pr-5">
                            <p className="text-uppercase text-blue-500 text-2xl font-semibold mb-4">Lorem Ipsum</p>
                            <h1 className="mb-4 font-medium text-4xl">Simply dummy text of the printing <span className="text-blue-500 font-medium">Name</span></h1>
                            <p className="text-muted mb-4 pb-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <Button className="bg-yellow-400 px-4 py-2 shadow-md hover:bg-yellow-500">
                                <a href="#">
                                    Find Out How <span className="ml-2 right-icon">&#8594;</span>
                                </a>
                            </Button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mt-5 lg:mt-0">
                            <Slider className="w-52 h-52 lg:w-96 lg:h-96" />
                        </div>
                    </Col>
                </Row>
            </Fade>
        </section>
    )
}

export default Hero