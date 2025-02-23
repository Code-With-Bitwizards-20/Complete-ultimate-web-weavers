import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HeroSection2.module.css";
import { memo } from "react";

const HeroSection2 = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const imageVariants = {
    hidden: { x: -100, opacity: 0, rotate: -5 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1.2, ease: "circOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const arrowVariants = {
    hover: { x: 5 },
    tap: { x: 0 },
  };

  const handleButtonClick = () => {
    navigate("/About-Us");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      className={styles.Main}
      aria-label="Hero Section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={containerVariants}
    >
      <div className={styles.ContentWrapper}>
        <div className={styles.Container}>
          <motion.picture
            className={styles.ImageContainer}
            variants={imageVariants}
          >
            <img
              {...{ fetchpriority: "high" }}
              src="/Images/1-min.png"
              alt="Hero_image"
              loading="eager"
              decoding="async"
              width={531}
              height={531}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </motion.picture>

          <motion.div
            className={styles.TextContainer}
            variants={containerVariants}
          >
            <motion.h2 variants={textVariants}>
              Innovative and Custom Web Solutions to Elevate{" "}
              <span>Your Online Presence. </span>
            </motion.h2>

            <motion.p variants={textVariants}>
              At <strong> Ultimate Web Weavers,</strong> we craft visually
              stunning, high-performance websites tailored to your business
              needs. Our expert team specializes in user-friendly, responsive,
              and scalable web solutions that drive engagement and conversions.
              Whether you&apos;re a startup or an established brand, we bring
              creativity and cutting-edge technology together to deliver
              exceptional digital experiences.{" "}
              <span>
                {" "}
                Let&apos;s turn your vision into reality with a website that
                stands out in today&apos;s competitive market.{" "}
              </span>{" "}
            </motion.p>

            <motion.div
              className={styles.gradientLine}
              aria-hidden="true"
              variants={lineVariants}
            ></motion.div>

            <motion.button
              className={styles.HeroButton}
              onClick={handleButtonClick}
              aria-label="Learn more about our pricing"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link to="/About-Us">
                Learn More
                <motion.img
                  src="/Images/akar-icons_arrow-right.svg"
                  alt="Arrow Icon"
                  aria-hidden="true"
                  role="presentation"
                  width={16}
                  height={16}
                  loading="lazy"
                  variants={arrowVariants}
                />
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default memo(HeroSection2);
