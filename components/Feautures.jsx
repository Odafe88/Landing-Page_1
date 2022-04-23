import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Hologram from "../assets/hologram.svg";
import Race from "../assets/race.svg"
import { Zoom } from 'react-reveal';

const Feautures = () => {


    return (
        <section id="feature" className="relative px-14 py-8 lg:px-24 lg:py-24">
            <Row className="justify-content-center">
                <Zoom>
                    <div className="title text-center mb-5">
                        <h3 className="font-semibold text-3xl text-yellow-400"><span>Features</span></h3>
                        <p className="text-gray-800">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                </Zoom>
            </Row>
            <Row className="flex flex-col-reverse  mt-5 justify-between items-center lg:flex-row">
                <Zoom >
                    <div>
                        <Hologram className="w-48 h-48 lg:w-96 lg:h-96" />
                    </div>
                </Zoom>
                <Col className="lg:w-64">
                    <div className="mt-5 mt-sm-0 mb-4">
                        <h5 className="text-blue-500 font-semibold mb-3 pt-3">Lorem Ipsum</h5>
                        <p className="text-gray-800 mb-3 font-medium">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <Button className="bg-yellow-400 px-4 py-2 shadow-md hover:bg-yellow-500">
                            <a href="#">
                                Read More  <span className="ml-2 right-icon">&#8594;</span>
                            </a>
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className="flex flex-col  mt-5 justify-between items-center lg:flex-row-reverse">
                <Col >
                    <div>
                        <Race className="w-48 h-48 lg:w-96 lg:h-96" />
                    </div>
                </Col>
                <Col className="lg:w-64">
                    <div className="mt-5 mt-sm-0 mb-4">
                        <h5 className="text-blue-500 font-semibold mb-3 pt-3">Lorem Ipsum</h5>
                        <p className="text-gray-800 mb-3 font-medium">Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab.</p>
                        <Button className="bg-yellow-400 px-4 py-2 shadow-md hover:bg-yellow-500">
                            <a href="#">
                                Read More  <span className="ml-2 right-icon">&#8594;</span>
                            </a>
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className="flex flex-col  mt-5 justify-between items-center lg:flex-row">
                <Col >
                    <div>
                        <Hologram className="w-48 h-48 lg:w-96 lg:h-96" />
                    </div>
                </Col>
                <Col className="lg:w-64">
                    <div className="mt-5 mt-sm-0 mb-4">
                        <h5 className="text-blue-500 font-semibold mb-3 pt-3">Lorem Ipsum</h5>
                        <p className="text-gray-800 mb-3 font-medium">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <Button className="bg-yellow-400 px-4 py-2 shadow-md hover:bg-yellow-500">
                            <a href="#">
                                Read More  <span className="ml-2 right-icon">&#8594;</span>
                            </a>
                        </Button>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Feautures