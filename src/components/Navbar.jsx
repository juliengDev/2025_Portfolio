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
        <Nav className="navbar-nav mr-auto  align-items-end">
          <Nav.Item className="nav-item lead">
            <Link className="nav-link" to="/#blog" onClick={() => (window.location.hash = "#blog")}>
              Blog
            </Link>
          </Nav.Item>

          {repos.show && (
            <Nav.Item className="nav-item lead">
              <Link className="nav-link" to="/#projects" onClick={() => (window.location.hash = "#projects")}>
                Projects
              </Link>
            </Nav.Item>
          )}

          <Nav.Item className="nav-item lead">
            <Link className="nav-link" to={about.resume} target="_blank" rel="noreferrer noopener">
              Resume
            </Link>
          </Nav.Item>

          {about.show && (
            <Nav.Item className="nav-item lead">
              <Link className="nav-link" to="/#aboutme" onClick={() => (window.location.hash = "#aboutme")}>
                About
              </Link>
            </Nav.Item>
          )}

          {skills.show && (
            <Nav.Item className="nav-item lead">
              <Link className="nav-link" to="/#skills" onClick={() => (window.location.hash = "#skills")}>
                Skills
              </Link>
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
