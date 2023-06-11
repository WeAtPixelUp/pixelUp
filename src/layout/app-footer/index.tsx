import "./style.css";
import favicon from "../../assets/images/favicon.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Index = () => {
  return (
    <footer
      style={{ backgroundColor: "#f5f5f7" }}
      className="text-center text-lg-start text-muted pt-5 border-top"
    >
      <section>
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <Image src={favicon} alt="company" />
              </h6>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <a
                  href="#what-do-we-do"
                  className="text-reset text-decoration-none"
                >
                  What do we do?
                </a>
              </p>
              <p>
                <Link
                  href="/services"
                  className="text-reset text-decoration-none"
                >
                  Our Services
                </Link>
              </p>
              <p>
                <a href="#" className="text-reset text-decoration-none">
                  Clients
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
              {/* <p>
                <i className="fas fa-home me-3"></i> New York, NY 10012, US
              </p> */}
              <p>
                {/* <i className="fas fa-envelope me-3"></i> */}
                pixelup.co.in@gmail.com
              </p>
              {/* <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <div className="footer-social text-center p-4">
        <a href="https://twitter.com/PixelUp_India" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/company/pixelupindia/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/pixelup.co.in/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.youtube.com/@pixelupindia" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </footer>
  );
};

export default Index;
