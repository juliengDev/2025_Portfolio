import React, { useState, useEffect, useCallback } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { Link, useLocation } from "react-router-dom";

const Navigation = React.forwardRef((props, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Utiliser useCallback pour mémoriser la fonction handleScroll
  const handleScroll = useCallback(() => {
    // Si on scrolle plus de 50px ou si on n'est pas sur la page d'accueil
    const isHomePage = location.pathname === "/" || location.pathname === "";

    if (!isHomePage || window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [location.pathname]); // Dépendance à location.pathname

  useEffect(() => {
    // Ajouter l'écouteur d'événement au montage
    window.addEventListener("scroll", handleScroll);

    // Vérifier immédiatement la position lors du chargement et du changement de route
    handleScroll();

    // Nettoyer l'écouteur d'événement au démontage
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Ajouter handleScroll comme dépendance

  return (
    <Navbar ref={props.navbarMenuRef} className={`px-3 fixed-top ${isScrolled ? "navbar-white" : "navbar-transparent"}`} expand="lg">
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto align-items-center">
          <Nav.Item className="nav-item lead">
            <a className="nav-link" href={process.env.PUBLIC_URL + "/#blog"}>
              Blog
            </a>
          </Nav.Item>

          {repos.show && (
            <Nav.Item className="nav-item lead">
              <a className="nav-link" href={process.env.PUBLIC_URL + "/#projects"}>
                Projects
              </a>
            </Nav.Item>
          )}

          <Nav.Item className="nav-item lead">
            <a className="nav-link" href={about.resume} target="_blank" rel="noreferrer noopener">
              Resume
            </a>
          </Nav.Item>

          {about.show && (
            <Nav.Item className="nav-item lead">
              <a className="nav-link" href={process.env.PUBLIC_URL + "/#aboutme"}>
                About
              </a>
            </Nav.Item>
          )}

          {skills.show && (
            <Nav.Item className="nav-item lead">
              <a className="nav-link" href={process.env.PUBLIC_URL + "/#skills"}>
                Skills
              </a>
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
