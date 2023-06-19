import "./style.css";
import { brandingLogo } from "@/assets/images";
import Link from "next/link";
import PrimaryButton from "../../components/primary-button";

const Index = () => {
  return (
    <nav className="header navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container">
        <Link style={{ width: "12rem" }} className="navbar-brand" href="#" passHref hrefLang="en">
          {brandingLogo}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/" passHref hrefLang="en">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#what-do-we-do"  hrefLang="en">
                About
              </a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#services-home"  hrefLang="en">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-us" className="nav-link "  hrefLang="en">
                Contact
              </a>
            </li>
          </ul>
          <PrimaryButton title="Join Our Team" backgroundColor="#ff5757" />
        </div>
      </div>
    </nav>
  );
};

export default Index;
