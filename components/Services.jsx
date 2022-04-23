import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaServicestack } from 'react-icons/fa';
import Fade from "react-reveal";

const Services = () => {
    const services = [
        { title: "Lorem Ipsum", desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Lorem Ipsum", desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Lorem Ipsum", desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Lorem Ipsum", desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Lorem Ipsum", desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Lorem Ipsum", desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    ];

    return (
        <section id="service" className="relative bg-gray-200 px-14 py-8 lg:px-24 lg:py-26">
            <Fade big>
                <Row className="justify-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-semibold text-yellow-500 text-2xl"><span className="text-warning">Services</span></h3>
                            <p className="text-gray-800 font-medium">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </Col>
                </Row>
                <Row className="grid md:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map((service, key) =>
                            <Col key={key} className="mx-4 bg-white rounded-lg my-4 px-4 py-2 shadow-lg" >
                                <Fade>
                                    <div className="mb-5">
                                        <FaServicestack className="text-blue-500" />
                                    </div>
                                    <h5 className="text-blue-500 font-semibold pt-1 mb-4">{service.title}</h5>
                                    <p className="text-gray-700 font-medium mb-4">{service.desc}</p>
                                </Fade>
                            </Col>
                        )
                    }
                </Row>
            </Fade>
        </section>
    )
}

export default Services