import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import Logo from '../../../Pictures/llilogo.png'
const Navbar = () => {
  return (
    <nav className='main-navbar'>
      <div className='container d-flex justify-content-between align-items-center flex-wrap'>
        <div className='d-flex align-items-center gap-5 top-navbar-left'>
          
        <div className='d-flex align-items-center gap-2'>
            <img src={Logo} alt="Logo"  className='navbar-logo'/>
        </div>

          <div className='d-flex align-items-center gap-5'>
            <h6 className='mb-0'><Link to="/" className='nav-link'>HOME</Link></h6>
            <h6 className='mb-0'><Link to="/about-us" className='nav-link '>ABOUT US</Link></h6>
            <h6 className='mb-0'><Link to="/services" className='nav-link'>SERVICES</Link></h6>
            <h6 className='mb-0'><Link to="/projects" className='nav-link'>PROJECTS</Link></h6>
            <h6 className='mb-0'><Link to="/newsroom" className='nav-link'>NEWSROOM</Link></h6>
            <h6 className='mb-0'><Link to="/csr" className='nav-link'>CSR</Link></h6>
            <h6 className='mb-0'><Link to="/contact-us" className='nav-link'>CONTACT US</Link></h6>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar