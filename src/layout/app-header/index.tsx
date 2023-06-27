"use client";
import "./style.css";
import { brandingLogo } from "@/assets/images";
import { useEffect, useState } from "react";
import Link from "next/link";
import PrimaryButton from "../../components/primary-button";

const Index = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState<any>(true);
  const [scrollTimeout, setScrollTimeout] = useState<any>(null);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Hide the navbar
      setIsNavbarVisible(false);

      // Set a timeout to make the navbar visible after scrolling stops
      const timeout = setTimeout(() => {
        setIsNavbarVisible(true);
      }, 200); // Adjust the delay as needed (milliseconds)

      // Store the timeout ID
      setScrollTimeout(timeout);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTimeout]);

  return (
    <nav
      id="header"
      className={`navbar navbar-expand-lg bg-body-tertiary sticky-top${
        isNavbarVisible ? "" : " hide"
      }`}
    >
      <div className="container">
        <Link className="header__logo-box navbar-brand " href="/">
          {brandingLogo}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#what-do-we-do">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-us">
                Contact
              </a>
            </li>
            <li className="nav-item nav-link text-center">
              <PrimaryButton title="Join Our Team" backgroundColor="#ff5757" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Index;
