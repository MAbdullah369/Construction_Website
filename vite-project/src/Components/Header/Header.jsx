<<<<<<< HEAD
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <img src="img.png" alt="" />
      <p>Rawalpindi | Lahore | Karachi</p>
      <img src="img2.png" alt="" />
      <p>+92 303 42232979</p>
      <img src="img4.png" alt="" />
      <p>+92 331 4874500</p>
      <img src="img1.png" alt="" />
      <p> zahidabdullah161@gmail.com</p>
    </div>

  )
}
=======
import React from "react";
import TopNavbar from "./TopNavbar/TopNavbar";
import Navbar from "./Navbar/Navbar";
const Header = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />
    </>
  );
};
>>>>>>> 1854c389d382e2fd071884458fd219f8aa5c2207

export default Header;
