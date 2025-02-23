import { motion } from "framer-motion";
import styles from "./OurWorkText.module.css";
import { memo } from "react";

const OurWorkText = () => {
  // Animation configurations matching previous components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <motion.section
      className={styles.Main}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px", once: false }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <motion.div
        className={styles.ContentWrapper}
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.div
          className={styles.Container}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "0px", once: false }}
        >
          <motion.h2
            variants={textVariants}
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            Explore Our Latest Projects !!
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", delay: 0.4 }}
          >
            Every line of code, every pixel, and every interaction tells a
            story. In this section, you &apos;ll find a snapshot of our recent
            work—projects that highlight our technical expertise, creative
            flair, and attention to detail. From revamping legacy systems to
            building scalable web applications from scratch, we pride ourselves
            on delivering solutions that drive growth and engagement. Browse
            through case studies, client testimonials, and live demos to see how
            we turn visions into reality. Ready to see what we can do for you?
            Let our work speak for itself.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default memo(OurWorkText);
