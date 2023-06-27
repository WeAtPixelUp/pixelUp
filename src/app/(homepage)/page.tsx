"use client";
import "./style.css";
import hero from "../../assets/gif/hero.json";
import doing from "../../assets/gif/doing.json";
import contact from "../../assets/gif/contact.json";
import Lottie from "react-lottie";
import PrimaryButton from "../../components/primary-button";
import { serviceDev, serviceMarketing, serviceUi } from "@/assets/images";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const Index = () => {
  const [index, setIndex] = useState(0);
  // Lottie config
  const animatedHero = {
    loop: true,
    autoplay: true,
    animationData: hero,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const animatedDoing = {
    loop: true,
    autoplay: true,
    animationData: doing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const animatedContact = {
    loop: true,
    autoplay: true,
    animationData: contact,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const servicesArray = [
    { id: "ui", service: "Design", img: serviceUi },
    { id: "marketing", service: "Marketing", img: serviceMarketing },
    {
      id: "development",
      service: "Web/App Development",
      img: serviceDev,
    },
  ];

  const heroTitles = ["esign", "evelopment"];

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const handleOnAnimationComplete = () =>
    setIndex((prevIndex: number) => (prevIndex === 0 ? 1 : 0));

  return (
    <div className="homepage">
      <div className="section-one">
        <div className="homepage__hero container d-flex justify-content-between align-items-center">
          <div className="homepage__hero__content-box">
            <h2 className="heading-primary--red">
              Marketing and d
              <motion.span
                key={heroTitles[index]}
                initial="initial"
                animate="animate"
                variants={textVariants}
                transition={{ duration: 1.5, delay: 0.5 }}
                onAnimationComplete={handleOnAnimationComplete}
                className="heading-primary--red"
              >
                {heroTitles[index]}
              </motion.span>
            </h2>
            <p className="paragraph-primary">
              Developing interactive web pages with stunning designs and
              crafting effective marketing strategies to help businesses
              succeed. Let us take your brand to the next level with our
              expertise and creativity.
            </p>
          </div>
          <div
            style={{ width: "100%", height: "auto" }}
            className="homepage__hero__img-box"
          >
            <Lottie options={animatedHero} height="100%" width="100%" />
          </div>
        </div>
      </div>

      <div id="what-do-we-do" className="section-two">
        <div className="homepage__doing container d-flex justify-content-between align-items-center">
          <div className="homepage__doing__img-box">
            <Lottie options={animatedDoing} width={650} height={600} />
          </div>
          <div className="homepage__doing__content-box ms-5">
            <h1 className="heading-primary">What do we do?</h1>
            <p className="paragraph-primary">
              Looking for top-notch marketing, design, and development services?
              Look no further than our expert team. We specialize in delivering
              creative, effective solutions that help businesses grow. From
              branding to web design and development, we have the skills and
              experience to take your company to the next level. Contact us
              today to learn more!
            </p>
            <PrimaryButton
              destination="#contact-us"
              title="Contact"
              backgroundColor="#282727"
            />
          </div>
        </div>
      </div>

      <div id="services-home" className="section-three">
        <h2 className="heading-primary mb-5">Our Services</h2>
        <div className="homepage__services container d-flex justify-content-between align-items-center">
          {servicesArray.map((service) => {
            return (
              <Link
                className="text-decoration-none"
                href={`/services?id=${service.id}`}
                passHref
                hrefLang="en"
                key={service.id}
              >
                <div
                  className="card text-center homepage__services--hover-effect"
                  style={{
                    width: "22rem",
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                    borderRadius: "1rem",
                    padding: "2rem 0",
                    cursor: "pointer",
                  }}
                >
                  <span className="card-img-top mt-5">{service.img}</span>
                  <div className="card-body">
                    <p className="paragraph-primary--services">
                      {service.service}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div id="contact-us" className="section-four">
        <div className="homepage__contact container d-flex justify-content-between align-items-center">
          <div className="homepage__contact__content-box">
            <h2 className="heading-primary">Contact Us</h2>
            <form
              action="https://formsubmit.co/pixelup.co.in@gmail.com"
              method="POST"
            >
              <input
                name="name"
                type="text"
                id="name"
                placeholder="Name"
                required
              />
              <input
                name="email"
                type="text"
                id="email"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={8}
                placeholder="Message"
                required
              />
              <button
                style={{
                  backgroundColor: "#ff5757",
                  padding: "0.8rem 1.5rem",
                  borderRadius: "50px",
                  border: "none",
                  color: "#fff",
                  fontFamily: "inherit",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                }}
                type="submit"
              >
                Contact
              </button>
            </form>
          </div>
          <div className="homepage__contact__img-box">
            <Lottie options={animatedContact} width={880} height={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
