import {
  FaMapMarkerAlt,
  FaPhone,
  FaFax,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
//oper react bootsrap ka icons import kia hain
import "bootstrap/dist/css/bootstrap.min.css";

const TopNavbar = () => {
  return (
    <nav className="top-navbar">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-xs-12">
            <div className="d-flex flex-wrap gap-4 top-navbar-left">
              <div className="d-flex align-items-center gap-2">
                <FaMapMarkerAlt className="icon" />
                <p className="mb-0">Rawalpindi | Lahore | Karachi</p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <FaPhone className="icon" />
                <p className="mb-0">(+92-42) 36622255</p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <FaFax className="icon" />
                <p className="mb-0">(+92-42) 36622408</p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <FaEnvelope className="icon" />
                <p className="mb-0">info@kingcrete.com</p>
              </div>
            </div>
          </div>

          <div className="col-sm-3 col-xs-12">
            <div className="d-flex align-items-center justify-content-end gap-1 top-navbar-right">
              <FaFacebookF className="facebook-icon" />
              <p className="brand-name mb-0">KINGCRETE</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
