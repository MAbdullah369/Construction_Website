import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Logo from "../../../Pictures/ferrum-engineering-logo-full-color-rgb-500px-w-72ppi.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [sticky, setIsSticky] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={sticky ? "navbar sticky" : "navbar"}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* ya Logo h  */}
        <div className="d-flex align-items-center ">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </div>

        {/*ya Nav Links h */}
        <div className="d-none d-lg-flex align-items-center gap-5 nav-links">
          <h6>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </h6>
          <h6>
            <Link to="/about-us" className="nav-link">
              ABOUT US
            </Link>
          </h6>
          <h6>
            <Link to="/services" className="nav-link">
              SERVICES
            </Link>
          </h6>
          <h6>
            <Link to="/projects" className="nav-link">
              PROJECTS
            </Link>
          </h6>
          <h6>
            <Link to="/newsroom" className="nav-link">
              NEWSROOM
            </Link>
          </h6>
          <h6>
            <Link to="/csr" className="nav-link">
              CSR
            </Link>
          </h6>
          <h6>
            <Link to="/contact-us" className="nav-link">
              CONTACT US
            </Link>
          </h6>
        </div>

        <Button className="toggle-btn d-lg-none" onClick={handleShow}>
          ☰
        </Button>

        {/* Bootstrap ka Offcanvas Menu h */}
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="d-flex flex-column gap-3">
              <h6 className="mb-0">
                <Link to="/" className="nav-link" onClick={handleClose}>
                  HOME
                </Link>
              </h6>
              <h6 className="mb-0">
                <Link to="/about-us" className="nav-link" onClick={handleClose}>
                  ABOUT US
                </Link>
              </h6>
              <h6 className="mb-0">
                <Link to="/services" className="nav-link" onClick={handleClose}>
                  SERVICES
                </Link>
              </h6>
              <h6 className="mb-0">
                <Link to="/projects" className="nav-link" onClick={handleClose}>
                  PROJECTS
                </Link>
              </h6>
              <h6 className="mb-0">
                <Link to="/newsroom" className="nav-link" onClick={handleClose}>
                  NEWSROOM
                </Link>
              </h6>
              <h6 className="mb-0">
                <Link to="/csr" className="nav-link" onClick={handleClose}>
                  CSR
                </Link>
              </h6>
              <h6 className="mb-0">
                <Link
                  to="/contact-us"
                  className="nav-link"
                  onClick={handleClose}
                >
                  CONTACT US
                </Link>
              </h6>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  );
};

export default Navbar;
