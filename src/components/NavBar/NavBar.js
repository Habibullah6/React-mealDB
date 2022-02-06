import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Meal DB</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='me-auto'>
       <Link to="/meals" className='text-white'>
          <span>Meals</span>
       </Link>
    </Nav>
    <Nav>
       <Nav.Link><i className="fas fa-utensils fs-5 text-warning"></i></Nav.Link>
       <Nav.Link><i className="far fa-user-circle fs-5"> </i></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    );
};

export default NavBar;