import { FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope, FaFacebookF } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const TopNavbar = () => {
  return (
    <nav className="top-navbar">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">

        <div className="d-flex align-items-center gap-4 top-navbar-left">
          <div className="d-flex align-items-center gap-2">
            <FaMapMarkerAlt className="icon" />
            <p className="mb-0 address-text">Rawalpindi | Lahore | Karachi</p>
          </div>

          <div className="d-flex align-items-center gap-2">
            <FaPhone className="icon" />
            <p className="mb-0 phone-text">(+92-42) 36622255</p>
          </div>

          <div className="d-flex align-items-center gap-2">
            <FaFax className="icon" />
            <p className="mb-0 fax-text">(+92-42) 36622408</p>
          </div>

          <div className="d-flex align-items-center gap-2">
            <FaEnvelope className="icon" />
            <p className="mb-0 email-text">info@kingcrete.com</p>
          </div>
        </div>
        
        <div className="d-flex align-items-center gap-2 top-navbar-right">
          <FaFacebookF className="facebook-icon" />
          <p className="brand-name mb-0">KINGCRETE</p>
        </div>

      </div>
    </nav>
  );
};

export default TopNavbar;