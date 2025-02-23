import { motion } from "framer-motion";
import styles from "./Text.module.css";
import { memo } from "react";

const TextSection = () => {
  // Animation configurations
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
      aria-labelledby="contact-heading"
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
          <motion.h1
            variants={textVariants}
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            Let&apos;s get in touch with us !!
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", delay: 0.4 }}
          >
            Ready to bring your vision to life? Whether you need a stunning
            website, seamless functionality, or ongoing maintenance, our expert
            team is here to help. Get in touch today to schedule a consultation
            and discover how our web development, design, and maintenance
            services can elevate your online presence. Let&apos;s build
            something amazing together—contact us now !
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default memo(TextSection);
