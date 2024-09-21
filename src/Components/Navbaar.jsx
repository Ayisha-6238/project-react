import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from "react-icons/fa";
import './Style.css'
import { Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function Navbaar() {
    return (
        <div className='nav-bar fixed-top bg-white'>
            <Navbar expand="lg">
                <Container fluid>
                    <Link to={'/'}><img src="https://storylineonline.net/wp-content/themes/storylineonline/assets/images/logo.png" alt="" /></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link ><Link className='link-style' to={'/all-books'}><h6>All Books</h6></Link> </Nav.Link>
                            <Nav.Link ><Link className='link-style' to={'/about'} ><h6>About Us</h6></Link></Nav.Link>
                            <Nav.Link ><Link className='link-style' to={'/awards'} ><h6>Awards</h6></Link> </Nav.Link>
                            <Nav.Link ><h6>Subscribe</h6></Nav.Link>
                        </Nav>
                        <div className="search">
                            <input type="text" placeholder='Search' />
                            <button><FaSearch /></button>
                        </div>
                        <button className='donate-btn ms-4'>Donate</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </div>
    )
}

export default Navbaar