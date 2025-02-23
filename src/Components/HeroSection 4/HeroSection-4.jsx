import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HeroSection4.module.css";

const HeroSection4 = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.2, ease: "circOut" },
    },
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
    navigate("/Pricing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      className={styles.Main}
      aria-labelledby="hero-section4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <div className={styles.ContentWrapper}>
        <div className={styles.Container}>
          <motion.div className={styles.TextContainer} variants={textVariants}>
            <h2>
              UI/UX Designers Skillfully Turning User Needs Into{" "}
              <span>Scalable Business Wins.</span>
            </h2>
            <p>
              <span className={styles.Span}>
                UI/UX design is the backbone of any successful digital product.
              </span>{" "}
              A well-crafted user interface (UI), combined with an intuitive
              user experience (UX), enhances usability and strengthens brand
              identity. The right design ensures users can navigate your website
              or app effortlessly, leading to improved{" "}
              <span className={styles.Span}>engagement and satisfaction.</span>{" "}
              A seamless and visually appealing design builds trust and
              encourages users to return, ultimately driving conversions and
              business growth. It&rsquo;s about understanding your users&rsquo;
              needs and behaviors{" "}
              <span className={styles.Span}>
                to create meaningful, efficient interactions.
              </span>
            </p>
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
                to="/Pricing"
                aria-label="More Information About UI/UX Design"
              >
                More Info
                <motion.img
                  src="/Images/akar-icons_arrow-right.svg"
                  alt="Arrow pointing right"
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

          <motion.div
            className={styles.ImageContainer}
            variants={imageVariants}
          >
            <img
              src="/Images/50-min.png"
              alt="Illustration of UI/UX design concept"
              width={543}
              height={543}
              loading="eager"
              decoding="async"
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

export default HeroSection4;
