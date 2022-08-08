/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavList } from "../../styles";
import IconSrc from "../../assets/svg-hamburger.jpg";

function Navbar(props) {
  const { navbarItems } = props;
  const [stickyClass, setStickyClass] = useState({ position: "relative" });
  const [activeLink, setActiveLink] = useState("Home");
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50
        ? setStickyClass({
            position: "fixed",
            top: 0,
            zIndex: 50,
            width: "100%",
            background: "#fff",
            opacity: 0.9,
            boxShadow: "0 4px 2px -2px #f5f5f5",
            transition: "0.3s",
          })
        : setStickyClass({ position: "relative" });
    }
  };
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
        style={{ display: "inline-block" }}
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
    <nav className="nav__container" style={stickyClass}>
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
