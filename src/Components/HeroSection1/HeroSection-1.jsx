import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HeroSection.module.css";
import { TypeAnimation } from "react-type-animation";

const HeroSection1 = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
  };

  const gradientVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1.5, ease: "circOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const companyNameVariants = {
    hidden: { backgroundPosition: "100% 50%" },
    visible: {
      backgroundPosition: "0% 50%",
      transition: { duration: 1.5, ease: "linear" },
    },
  };

  const handleButtonClick = () => {
    navigate("/Contact-Us");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      className={styles.Main}
      aria-label="Hero Section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.ContentWrapper}>
        <div className={styles.Container}>
          <motion.div
            className={styles.TextContainer}
            variants={containerVariants}
          >
            <motion.h1 variants={textVariants}>
              Transform Ideas into Reality Seamlessly with{" "}
              <motion.span
                className={styles.companyName}
                variants={companyNameVariants}
                whileHover={{
                  backgroundSize: "200% 100%",
                  transition: { duration: 0.8 },
                }}
              >
                Ultimate Web Weavers
              </motion.span>
            </motion.h1>

            <motion.p variants={textVariants}>
              Unleash your potential with our bespoke web solutions, blending
              artistry and technology to elevate your brand and engage your
              audience.
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <TypeAnimation
                  aria-live="polite"
                  preRenderFirstString={true}
                  className={styles.Animation}
                  sequence={[
                    "Elevating ideas through innovative tech.",
                    1000,
                    "Crafting digital experiences that matters.",
                    1000,
                    "Delivering innovative solutions for tomorrow.",
                    1000,
                    "Shaping futures with advanced solutions.",
                    1000,
                    "Powering progress through digital innovation.",
                    1000,
                    "Plevating ideas through innovative tech.",
                    1000,
                  ]}
                  wrapper="span"
                  speed={30}
                  deletionSpeed={10}
                  aria-label="Dynamic service offerings"
                  style={{ display: "inline-block" }}
                  repeat={0}
                  cursor={false}
                />
              </motion.span>
            </motion.p>

            <motion.div
              className={styles.gradientLine}
              aria-hidden="true"
              variants={gradientVariants}
            ></motion.div>

            <motion.button
              className={styles.HeroButton}
              onClick={handleButtonClick}
              aria-label="Learn more about Ultimate Web Weavers"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link to="/Contact-Us">
                Get Started
                <motion.img
                  src="/Images/akar-icons_arrow-right.svg"
                  alt="Arrow Icon"
                  aria-hidden="true"
                  width={16}
                  height={16}
                  loading="lazy"
                />
              </Link>
            </motion.button>
          </motion.div>

          <motion.picture
            className={styles.ImageContainer}
            variants={imageVariants}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              {...{ fetchpriority: "high" }}
              src="/Images/image3-min.png"
              alt="Professional web development team creating digital solutions"
              loading="eager"
              decoding="async"
              width={546}
              height={526}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </motion.picture>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection1;
