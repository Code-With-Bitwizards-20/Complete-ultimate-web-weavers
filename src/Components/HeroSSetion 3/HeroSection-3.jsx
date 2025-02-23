import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HeroSection3.module.css";
import { memo } from "react";

const HeroSection3 = () => {
  const navigate = useNavigate();

  // Animation variants with increased delays
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        when: "beforeChildren",
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: "circOut",
        delay: 0.6,
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    visible: {
      transition: {
        delay: 1.0,
      },
    },
  };

  const handleButtonClick = () => {
    navigate("/Services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      className={styles.Main}
      aria-labelledby="hero-section"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "0px 0px -25% 0px",
      }}
      variants={containerVariants}
    >
      <div className={styles.ContentWrapper}>
        <div className={styles.Container}>
          <motion.div
            className={styles.TextContainer}
            variants={containerVariants}
          >
            {/* Add custom prop to text elements for individual delays */}
            <motion.h2 variants={textVariants} custom={0}>
              We&apos;re Not Just Developers We&apos;re Your Growth Smiths{" "}
              <span>Your Digital Success.</span>
            </motion.h2>

            <motion.p variants={textVariants} custom={1}>
              A great website is more than just aesthetics—it&apos;s a powerful
              tool for{" "}
              <span> engagement, conversions, and business expansion.</span> At{" "}
              <span>Ultimate Web Weavers,</span> we integrate speed,
              functionality, and search engine optimization (SEO) to ensure your
              site not only looks exceptional but also ranks higher, loads
              faster, and keeps users coming back. We build future-ready
              platforms that evolve with your business, helping you stay ahead
              in an ever-changing digital landscape.
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
                to="/Services"
                aria-label="Learn more about Ultimate Web Weavers"
              >
                Learn More
                <motion.img
                  src="/Images/akar-icons_arrow-right.svg"
                  alt="Arrow Icon"
                  aria-hidden="true"
                  loading="lazy"
                  role="presentation"
                  width={16}
                  height={16}
                  whileHover={{ x: 5 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </motion.button>
          </motion.div>

          <motion.div
            className={styles.ImageContainer}
            variants={imageVariants}
          >
            <img
              {...{ fetchpriority: "high" }}
              src="/Images/18-min.png"
              alt="Hero_image"
              loading="eager"
              decoding="async"
              width={575}
              height={575}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default memo(HeroSection3);
