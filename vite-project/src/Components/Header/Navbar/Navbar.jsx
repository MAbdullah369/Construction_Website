import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Logo from '../../../Pictures/llilogo.png';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';


const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className='main-navbar'>
      <div className='container d-flex justify-content-between align-items-center flex-wrap'>
        <div className='d-flex align-items-center gap-5'>
          
          {/* Logo */}
          <div className='d-flex align-items-center gap-2 top-navbar-left'>
            <img src={Logo} alt="Logo" className='navbar-logo' />
          </div>

          {/* Navbar Links */}
          <div className='d-flex align-items-center gap-5 nav-links top-navbar-right'>
            <h6 className='mb-0'><Link to="/" className='nav-link nav-links'>HOME</Link></h6>
            <h6 className='mb-0'><Link to="/about-us" className='nav-link nav-links'>ABOUT US</Link></h6>
            <h6 className='mb-0'><Link to="/services" className='nav-link nav-links'>SERVICES</Link></h6>
            <h6 className='mb-0'><Link to="/projects" className='nav-link nav-links'>PROJECTS</Link></h6>
            <h6 className='mb-0'><Link to="/newsroom" className='nav-link nav-links'>NEWSROOM</Link></h6>
            <h6 className='mb-0'><Link to="/csr" className='nav-link nav-links'>CSR</Link></h6>
            <h6 className='mb-0'><Link to="/contact-us" className='nav-link nav-links'>CONTACT US</Link></h6>
          </div>

          {/* Toggle Button (Hidden above 1080px) */}
          <Button className="toggle-btn" onClick={handleShow}>
            ☰
          </Button>

          {/* Offcanvas Menu */}
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className='d-flex flex-column gap-3'>
                <h6 className='mb-0'><Link to="/" className='nav-link'>HOME</Link></h6>
                <h6 className='mb-0'><Link to="/about-us" className='nav-link'>ABOUT US</Link></h6>
                <h6 className='mb-0'><Link to="/services" className='nav-link'>SERVICES</Link></h6>
                <h6 className='mb-0'><Link to="/projects" className='nav-link'>PROJECTS</Link></h6>
                <h6 className='mb-0'><Link to="/newsroom" className='nav-link'>NEWSROOM</Link></h6>
                <h6 className='mb-0'><Link to="/csr" className='nav-link'>CSR</Link></h6>
                <h6 className='mb-0'><Link to="/contact-us" className='nav-link'>CONTACT US</Link></h6>
              </div>
            </Offcanvas.Body>
          </Offcanvas>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
