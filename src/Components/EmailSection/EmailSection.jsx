import { motion } from "framer-motion";
import styles from "./EmailSection.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const emailRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const handleClick = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    console.log("Sending email:", email);
    if (email) {
      emailjs
        .send(
          "service_zsd6g0j",
          "template_xthkfkq",
          { client_email: email },
          "0IWPGmsaDtFB9z23f"
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
          },
          (error) => {
            console.error("Email sending failed:", error.text);
          }
        );
    } else {
      console.log("Please enter an email address.");
    }
  };

  return (
    <motion.section
      className={styles.Main}
      aria-labelledby="email-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <motion.div
        className={styles.ContentWrapper}
        variants={containerVariants}
      >
        <motion.div className={styles.Container} variants={containerVariants}>
          <motion.div
            className={styles.ImageContainer}
            variants={imageVariants}
          >
            <motion.img
              src="/Images/7-min.png"
              alt="Reach your target audience with effective web strategies"
              className={styles.Image}
              loading="lazy"
              width={709}
              height={689}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </motion.div>

          <motion.div className={styles.TextSection} variants={textVariants}>
            <motion.h2 variants={textVariants}>
              Get Exponential Reach via <span>Ultimate Web Weavers</span>
            </motion.h2>
            <motion.form
              className={styles.EmailInputGroup}
              variants={textVariants}
              onSubmit={(e) => e.preventDefault()}
            >
              <motion.input
                type="email"
                placeholder="Enter your Work Email"
                className={styles.EmailInput}
                aria-label="Enter your work email"
                required
                ref={emailRef}
              />
              <motion.button
                className={styles.HeroButton}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handleClick}
              >
                <a href="">
                  Get in Touch
                  <motion.img
                    src="/Images/akar-icons_arrow-right.svg"
                    alt="Arrow Icon"
                    loading="lazy"
                    aria-hidden="true"
                    role="presentation"
                    width={16}
                    height={16}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </a>
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default EmailSection;
