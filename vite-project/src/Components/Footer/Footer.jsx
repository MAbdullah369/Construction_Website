import React from "react";
import FooterImage_01 from "../../Pictures/footer-background.png";
import './Footer.css';

const Footer = () => {
  return (
<<<<<<< HEAD
    <div className="footer">
      <div className="image_container">
        <img src={FooterImage_01} alt="" />
=======
    <div classname="footer">
      <div classname="image_container mt-4">
      <img src= {FooterImage_01} alt="" className='mt-5'/>
>>>>>>> d08ac349e4e02a1696225cf72eba6701ef7ba176
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
