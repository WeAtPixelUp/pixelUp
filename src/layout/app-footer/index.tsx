import "./style.css";
import favicon from "../../assets/images/favicon.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Index = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <Image src={favicon} alt="company" />
              </h6>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  What do we do?
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Our Services
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
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
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faYoutube} />
      </div>
    </footer>
  );
};

export default Index;
