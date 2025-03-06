import React from 'react'
import FooterImage_01 from "../../Pictures/footer-background.png";

const Footer = () => {
  return (
    <div classname="footer">
      <div classname="image_container mt-4">
      <img src= {FooterImage_01} alt="" className='mt-5'/>
      </div>
      <div className='Personal_info'>
        <ul>
          <li>
            <a href='#'>Office # 12, 1st Floor,
The Mall of Lahore,
172 Tufail Road, Lahore Cantt, PK
</a>
          </li>
          <li>(+92-42) 36622255</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer