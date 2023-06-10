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

const Index = () => {
  const [index, setIndex] = useState(0);

  // Function to toggle between titles
  const toggleTitle = () => {
    setIndex((prevIndex: number) => (prevIndex === 0 ? 1 : 0));
  };

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
    { id: 1, service: "UI/UX Design", img: serviceUi },
    { id: 2, service: "Marketing", img: serviceMarketing },
    { id: 3, service: "Web/App Development", img: serviceDev },
  ];

  const heroTitles = ["Design", "Development"];

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="homepage">
      <div className="section-one">
        <div className="homepage__hero container d-flex justify-content-between align-items-center">
          <div className="homepage__hero__content-box">
            <h1 className="heading-primary--red">
              Marketing and{" "}
              <motion.span
                key={heroTitles[index]}
                initial="initial"
                animate="animate"
                variants={textVariants}
                transition={{ duration: 0.6, delay: 0.6 }}
                onAnimationComplete={() =>
                  setIndex((prevIndex: number) => (prevIndex === 0 ? 1 : 0))
                }
                className="heading-primary--red"
              >
                {heroTitles[index]}
              </motion.span>
            </h1>
            <p className="paragraph-primary">
              We specialize in creating stunning web designs and effective
              marketing strategies to help businesses succeed. Let us take your
              brand to the next level with our expertise and creativity.
            </p>
          </div>
          <div className="homepage__hero__img-box">
            <Lottie options={animatedHero} height={600} width={600} />
          </div>
        </div>
      </div>

      <div className="section-two">
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
            <PrimaryButton title="Contact" backgroundColor="#282727" />
          </div>
        </div>
      </div>

      <div className="section-three">
        <h1 className="heading-primary mb-5">Our Services</h1>
        <div className="homepage__services container d-flex justify-content-between align-items-center">
          {servicesArray.map((service) => {
            return (
              <div
                key={service.id}
                className="card text-center"
                style={{
                  width: "22rem",
                  backgroundColor: "rgba(255, 255, 255, 0.25)",
                  borderRadius: "1rem",
                  padding: "1rem",
                }}
              >
                <span className="card-img-top">{service.img}</span>
                <div className="card-body mt-2">
                  <p className="paragraph-primary">{service.service}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section-four">
        <div className="homepage__contact container d-flex justify-content-between align-items-center">
          <div className="homepage__contact__content-box">
            <h1 className="heading-primary">Contact Us</h1>
            <form>
              <input type="text" id="name" placeholder="Name" />
              <input type="text" id="email" placeholder="Email" />
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={8}
                placeholder="Message"
              ></textarea>
              <PrimaryButton title="Send" backgroundColor="#FF5757" />
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
