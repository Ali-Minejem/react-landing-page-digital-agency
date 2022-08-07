/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Navbar.css";
import { NavList } from "../../styles";
import IconSrc from "../../assets/svg-hamburger.jpg";

function Navbar(props) {
  const { navbarItems } = props;
  const [activeLink, setActiveLink] = useState("Home");
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleUpdateActiveLink = (active) => {
    setActiveLink(active);
  };
  const toggleResponsiveMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  const navBarItemContent = navbarItems.map((item) => (
    <li key={item.id}>
      <a
        className={activeLink === item.label ? "active__link" : ""}
        href={item.href}
        aria-current="page"
        onClick={() => {
          handleUpdateActiveLink(item.label);
        }}
      >
        {item.label}
      </a>
    </li>
  ));

  return (
    <nav className="nav__container" id="home">
      <div className="nav__container__logo">
        <>DevEnhancer</>
        <div
          className="nav__container__menu__icon"
          onClick={toggleResponsiveMenu}
        >
          <img src={IconSrc} alt="menu-icon" width={30} heigth={30} />
        </div>
      </div>
      <NavList toggleMenu={toggleMenu}>{navBarItemContent}</NavList>
    </nav>
  );
}

export default Navbar;
