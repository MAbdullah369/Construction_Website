import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const TopNavbar = () => {
  return (
    <nav className="top-navbar">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <div className="d-flex align-items-center gap-2">
            <FaMapMarkerAlt className="icon" />
            <p className="mb-0">Rawalpindi | Lahore | Karachi</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <FaPhone className="icon" />
            <p className="mb-0">(+92 ) 33 4440573</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <FaEnvelope className="icon" />
            <p className="mb-0">info@ferrumengineering.com.pk</p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <FaFacebookF className="facebook-icon" />
          <p className="brand-name mb-0">FERRUM ENGINEERING</p>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
