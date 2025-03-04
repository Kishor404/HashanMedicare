import { useState } from "react";
import Logo from "../Assets/Logo.png";
import './Components.css';
import { Link } from 'react-router-dom';
import Menu from "../Assets/Icons/Menu.svg";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Nav-Home");
  const [isNavOpen, setIsNavOpen] = useState(false);  // For responsive menu

  const handleClick = (className) => {
    setActiveNav(className);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle nav visibility
  };

  return (
    <>
      <div className="NavBar">
        <div className="Nav-R">
          <img src={Logo} alt="Logo"/>
        </div>
        <div className="Nav-L">
          <Link to="/" className={`Nav-Home ${activeNav === "Nav-Home" ? "active" : ""}`} onClick={() => handleClick("Nav-Home")}>Home</Link>
          <Link to="/About" className={`Nav-About ${activeNav === "Nav-About" ? "active" : ""}`} onClick={() => handleClick("Nav-About")}>About</Link>
          <Link to="/Products" className={`Nav-Products ${activeNav === "Nav-Products" ? "active" : ""}`} onClick={() => handleClick("Nav-Products")}>Products</Link>
          {/* <Link to="/Services" className={`Nav-Services ${activeNav === "Nav-Services" ? "active" : ""}`} onClick={() => handleClick("Nav-Services")}>Services</Link> */}
          <Link to="/Course" className={`Nav-Course ${activeNav === "Nav-Course" ? "active" : ""}`} onClick={() => handleClick("Nav-Course")}>Training Course</Link>
          <Link to="/Contact" className={`Nav-Contact ${activeNav === "Nav-Contact" ? "active" : ""}`} onClick={() => handleClick("Nav-Contact")}>Contact</Link>
        </div>
      </div>

      {/* Responsive NavBar */}
      <div className="Res-NavBar">
        <div className="Res-Nav-R">
          <img src={Logo} alt="Logo"/>
        </div>
        <div className="Res-Nav-L">
          <button onClick={toggleNav}>
            <img src={Menu} alt="Menu"/>
          </button>
        </div>
        <div className={`Res-Nav-Nav ${isNavOpen ? 'res-nav-open' : ''}`}>
          <Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link>
          <Link to="/About" onClick={() => setIsNavOpen(false)}>About</Link>
          <Link to="/Products" onClick={() => setIsNavOpen(false)}>Products</Link>
          <Link to="/Services" onClick={() => setIsNavOpen(false)}>Services</Link>
          <Link to="/Course" onClick={() => setIsNavOpen(false)}>Training Course</Link>
          <Link to="/Contact" onClick={() => setIsNavOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
