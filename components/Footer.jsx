import React from 'react';
import { Container, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';

const Footer = () => {

    return (
        <section id="footer" className="relative bg-gray-200 px-14 py-8 lg:px-24 lg:py-26">
            <Container className="flex justify-around items-center">
                <div>
                    <Col>
                        <div className="flex flex-col mb-4">
                            <p className="text-sm text-gray-700 mt-4 mb-2">email@email.com</p>
                            <h6 className="text-sm text-gray-700 font-medium">+234 1234-5678-9</h6>
                        </div>
                    </Col>
                </div>
                <div className="ml-4 px-4">
                    <div>
                        <ul>
                            <li className="text-sm text-gray-700 font-medium"><a href="/">Contact Us</a></li>
                            <li className="text-sm text-gray-700 font-medium"><a href="/">FAQs</a></li>
                            <li className="text-sm text-gray-700 font-medium"><a href="/">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="ml-4 px-4">
                    <div className="text-center text-gray-700">
                        <p className="text-sm mb-0">2020 © Odafe. Design by Odafe</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Footer