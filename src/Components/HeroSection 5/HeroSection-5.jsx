import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HeroSection5.module.css";
import { memo } from "react";

const HeroSection5 = () => {
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
    navigate("/Contact-Us");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      className={styles.Main}
      aria-labelledby="hero-section5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}
      variants={containerVariants}
    >
      <div className={styles.ContentWrapper}>
        <div className={styles.Container}>
          <motion.picture
            className={styles.ImageContainer}
            variants={imageVariants}
          >
            <img
              src="/Images/22-min.png"
              alt="Illustration of Web Maintenance"
              loading="eager"
              decoding="async"
              width={641}
              height={475}
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
              Web Maintenance Keeping Your Site Fast, Secure, and{" "}
              <span>Always Timely Updated.</span>
            </motion.h2>
            <motion.p variants={textVariants}>
              Web maintenance is crucial for ensuring that your website remains
              fast, secure, and up-to-date.{" "}
              <span>Regular updates, performance checks,</span> and proactive
              security measures are key to keeping your site running smoothly
              and protecting it from vulnerabilities. A well-maintained website
              performs better, delivers an enhanced user experience, and helps
              to avoid downtime. By consistently monitoring your site, fixing
              bugs, and implementing the latest technologies, you can keep it
              optimized and competitive, all while ensuring it&rsquo;s safe and
              reliable for users.{" "}
              <span>
                With proper maintenance, you can stay ahead of potential issues
              </span>{" "}
              and keep your online presence strong.
            </motion.p>
            <motion.div
              className={styles.gradientLine}
              aria-hidden="true"
              variants={lineVariants}
            ></motion.div>
            <motion.button
              className={styles.HeroButton}
              onClick={handleButtonClick}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/Contact-Us"
                aria-label="More Information About Web Maintenance"
              >
                Contact Us
                <motion.img
                  src="/Images/akar-icons_arrow-right.svg"
                  alt="Arrow Icon"
                  loading="lazy"
                  aria-hidden="true"
                  width={16}
                  height={16}
                  role="presentation"
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

export default memo(HeroSection5);
