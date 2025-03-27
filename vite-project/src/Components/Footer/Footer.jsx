import React from "react";
import FooterImage_01 from "../../Pictures/footer-background.png";
import './Footer.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="image_container">
        <img src={FooterImage_01} alt="" />
      </div>
      <div className="Personal_info">
        <img src="https://www.kingcrete.com/assets/images/lli-footer-logo.png" alt="" />
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
         <h5>TOP SERVICES</h5>
         <li><i className="fas fa-globe"></i> BRIDGES</li>

<li><i className="fas fa-globe"></i> ROADS</li>
<li><i className="fas fa-globe"></i> HOSPITALS</li>
<li><i className="fas fa-globe"></i> HOTELS</li>
<li><i className="fas fa-globe"></i> BANKS</li>
<li><i className="fas fa-globe"></i> HOUSIING</li>
<li><i className="fas fa-globe"></i> PLAZAS</li>
<li><i className="fas fa-globe"></i> SCHOOLS</li>
<li><i className="fas fa-globe"></i> TECHNICAL</li>
        </ul>
      </div>
      <div className="recent-posts">
        <ul>
          <h5>RECENT POSTS</h5>
          <img src="	https://www.kingcrete.com/admin/upload/images/blog_image/5-New-Trends-in-Construction.4289ca.jpg" alt="" />
          <li><a href="#">5 New Trends in Construction</a></li>
          <img src="https://www.kingcrete.com/admin/upload/images/blog_image/7%20Things%20Successful%20Builders%20Have.fb2a44.jpg" alt="" />
          <li><a href="#">7 Things Successful Builders Have</a></li>
          <img src="	https://www.kingcrete.com/admin/upload/images/blog_image/Accurate-Data,-Smooth-Planning.9d8937.jpg" alt="" />
          <li><a href="#">Accurate Data, Smooth Planning</a></li>
          <img src="https://www.kingcrete.com/admin/upload/images/blog_image/How-to-Manage-a-Construction-Company.8cbb96.jpg" alt="" />
          <li><a href="#">How to Manage a Construction Company</a></li>
          <img src="https://www.kingcrete.com/admin/upload/images/blog_image/How-to-Motivate-your-Employees-&-Increase-Productivity.d57eaa.jpg" alt="" />
          <li><a href="#">How to Motivate your Employees & Increase Productivity</a></li>
        </ul>
      </div>
      <div className="subscribe"> 

      </div>
    </div>
  )
};

export default Footer;
