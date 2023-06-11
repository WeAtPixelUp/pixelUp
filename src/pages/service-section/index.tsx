"use client";
import "./style.css";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Lottie from "react-lottie";
import design from "../../assets/gif/design.json";
import marketing from "../../assets/gif/marketing.json";
import development from "../../assets/gif/development.json";

const Index = () => {
  const animatedDesign = {
    loop: true,
    autoplay: true,
    animationData: design,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const animatedMarketing = {
    loop: true,
    autoplay: true,
    animationData: marketing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const animatedDevelopment = {
    loop: true,
    autoplay: true,
    animationData: development,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const searchParams = useSearchParams();
  const id = searchParams?.get("id");

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="section-services">
      <div id="ui" className="service-section-one">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="section-services__img-box">
            <Lottie options={animatedDesign} width={650} />
          </div>
          <div className="section-services__content-box">
            <h1 className="heading-primary">Design Service</h1>
            <p className="paragraph-primary">
              Design That Pops: Unleash your brand&apos;s potential with our
              vibrant and captivating Design Services. Ignite your visuals, make
              a statement, and stand out from the crowd!
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <ul>
                <li>User Interface</li>
                <li>User Experience</li>
                <li>Brand Design</li>
                <li>Advertisement Design</li>
                <li>Graphic Design</li>
                <li>NFT Design</li>
              </ul>

              <ul>
                <li>Packaging Design</li>
                <li>Print Design</li>
                <li>Illustration</li>
                <li>Visual Branding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="marketing" className="service-section-two">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="section-services__img-box">
            <Lottie options={animatedMarketing} width={550} />
          </div>
          <div className="section-services__content-box">
            <h1 className="heading-primary">Marketing Service</h1>
            <p className="paragraph-primary">
              Boost Your Business&apos;s Online Presence: Dominate search
              engines, engage your audience, and skyrocket your success with
              marketing strategies. Maximize your reach, conversions, and
              revenue with our tailored digital solutions!
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <ul>
                <li>Search Engine Optimization (SEO)</li>
                <li>Pay-Per-Click (PPC) Advertising</li>
                <li>Social Media Marketing</li>
                <li>Content Marketing</li>
                <li>Email Marketing</li>
                <li>Social Media Advertising</li>
                <li>Influencer Marketing</li>
              </ul>

              <ul>
                <li>Analytics and Reporting</li>
                <li>Online/ Offline - Campaigns</li>
                <li>Meme Marketing</li>
                <li>GPT Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="development" className="service-section-three">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="section-services__img-box">
            <Lottie options={animatedDevelopment} width={650} />
          </div>
          <div className="section-services__content-box">
            <h1 className="heading-primary">Development Service</h1>
            <p className="paragraph-primary">
              Revolutionize Your Web Presence: Harness the Full Potential of Web
              Development for Next-Level Digital Solutions. Empower Your
              Business with Seamless Website
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <ul>
                <li>Custom Web Application Development</li>
                <li>Front-end Development</li>
                <li>Back-end Development</li>
                <li>Database Integration</li>
                <li>RESTful API Development</li>
                <li>Third-Party API Integration</li>
              </ul>

              <ul>
                <li>Real-time Applications</li>
                <li>Testing and Debugging</li>
                <li>Deployment and Hosting</li>
                <li>Maintenance and Support</li>
                <li>Solana Blockchain</li>
                <li>Web3 Based Products</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
