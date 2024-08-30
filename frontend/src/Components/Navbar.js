import { useState } from "react";
import Logo from "../Assets/Logo.png";
import './Components.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Nav-Home");

  const handleClick = (className) => {
    setActiveNav(className);
  };

  return (
    <div className="NavBar">
      <div className="Nav-R">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="Nav-L">
        <Link to="/" className={`Nav-Home ${activeNav === "Nav-Home" ? "active" : ""}`} onClick={() => handleClick("Nav-Home")}>Home</Link>
        <Link to="/About" className={`Nav-About ${activeNav === "Nav-About" ? "active" : ""}`} onClick={() => handleClick("Nav-About")}>About</Link>
        <Link to="/Products" className={`Nav-Products ${activeNav === "Nav-Products" ? "active" : ""}`} onClick={() => handleClick("Nav-Products")}>Products</Link>
        <Link to="/Services" className={`Nav-Services ${activeNav === "Nav-Services" ? "active" : ""}`} onClick={() => handleClick("Nav-Services")}>Services</Link>
        <Link to="/Projects" className={`Nav-Projects ${activeNav === "Nav-Projects" ? "active" : ""}`} onClick={() => handleClick("Nav-Projects")}>Projects</Link>
        <Link to="/Course" className={`Nav-Course ${activeNav === "Nav-Course" ? "active" : ""}`} onClick={() => handleClick("Nav-Course")}>Training Course</Link>
        <Link to="/Contact" className={`Nav-Contact ${activeNav === "Nav-Contact" ? "active" : ""}`} onClick={() => handleClick("Nav-Contact")}>Contact</Link>
        <Link to="/Members" className={`Nav-Members ${activeNav === "Nav-Members" ? "active" : ""}`} onClick={() => handleClick("Nav-Members")}>Members</Link>
      </div>
    </div>
  );
};

export default Navbar;
