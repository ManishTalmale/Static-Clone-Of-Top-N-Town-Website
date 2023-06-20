import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import './Nav.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className='nav' variant="dark">
        <Container >
          <Navbar.Brand to="#home"><img className='logo' alt='' src={require("../Images/top-n-town.png")} /></Navbar.Brand>
          <Nav className="me-auto"> 
            <NavLink className='space Nleft' to="/" style={{ color: "white", textDecoration: "none" }}><b>Home</b></NavLink>
            <NavLink className='space' to="/product" style={{ color: "white", textDecoration: "none" }}><b>Product</b></NavLink>
            <NavLink className='space' to="/franchise" style={{ color: "white", textDecoration: "none" }}><b>Franchise</b></NavLink>
            <NavLink className='space' to="/career" style={{ color: "white", textDecoration: "none" }}><b>Career</b></NavLink>
            <NavLink className='space' to="/contact" style={{ color: "white", textDecoration: "none" }}><b>Contact</b></NavLink>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default ColorSchemesExample;