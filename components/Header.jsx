import React, { useState, useEffect } from 'react';
import { Navbar, Collapse, Nav, NavItem, NavLink, NavbarBrand, NavbarToggler } from 'reactstrap';
import { FaBars } from 'react-icons/fa';




const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    })

    const handleScroll = () => {
        if (window.scrollY > 90) {
            setSticky(true)
        } else if (window.scrollY < 90) {
            setSticky(false)
        }
    }

    const MobileMenu = ({ isOpen }) => (
        <Collapse isOpen={isOpen} className={`absolute bg-white top-20 left-0 h-screen w-screen bg-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <Nav className="m-auto flex flex-col items-center justify-center" navbar>
                <NavItem className="px-8 py-8 lg:py-0">
                    <NavLink className="font-semibold text-lg" href="/">Home</NavLink>
                </NavItem>
                <NavItem className="px-8 py-8 lg:py-0">
                    <NavLink className="font-semibold text-lg" href="#feature">Features</NavLink>
                </NavItem>
                <NavItem className="px-8 py-8 lg:py-0">
                    <NavLink className="font-semibold text-lg" href="#service">Services</NavLink>
                </NavItem>
                <NavItem className="px-8 py-8">
                    <NavLink className="font-semibold text-lg" href="#about">About</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    )


    return (
        <div className="h-16 px-14 py-4 sticky lg:h-20">
            <Navbar className="container mx-auto" expand="md">
                <div className="flex justify-between items-center">
                    <NavbarBrand className="font-semibold text-lg" href="/">LOGO</NavbarBrand>
                    <div className="z-50 inline-block lg:hidden" onClick={toggle}>
                        <FaBars />
                    </div>
                    <MobileMenu isOpen={isOpen} />
                    <Collapse className="hidden lg:flex">
                        <Nav className="m-auto flex flex-col items-center justify-center lg:flex-row" navbar>
                            <NavItem className="px-8 py-8 lg:py-0">
                                <NavLink className="font-semibold text-lg" href="/">Home</NavLink>
                            </NavItem>
                            <NavItem className="px-8 py-8 lg:py-0">
                                <NavLink className="font-semibold text-lg" href="#feature">Features</NavLink>
                            </NavItem>
                            <NavItem className="px-8 py-8 lg:py-0">
                                <NavLink className="font-semibold text-lg" href="#service">Services</NavLink>
                            </NavItem>
                            <NavItem className="px-8 py-8 lg:py-0">
                                <NavLink className="font-semibold text-lg" href="#about">About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header