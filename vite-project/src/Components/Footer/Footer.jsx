import React from "react";
import FooterImage_01 from "../../Pictures/footer-background.png";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="image_container">
        <img src={FooterImage_01} alt="" />
      </div>
      <div className="Personal_info">
        <ul>
          <li>
              Office # 12, 1st Floor, The Mall of Lahore, 172 Tufail Road,
              Lahore Cantt, PK
          </li>
          <li>(+92-42) 36622255</li>
          <li>info@kingcrete.com</li>
        </ul>
      </div>
      <div className="top_services">
        <ul>
          TOP SERVICES

        </ul>

      </div>
    </div>
  );
};

export default Footer;
