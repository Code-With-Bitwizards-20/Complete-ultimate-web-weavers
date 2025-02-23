import { motion } from "framer-motion";
import styles from "./Pricing.module.css";

const PricingTitle = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.section
      className={styles.Main}
      aria-labelledby="pricing-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px" }}
      key="pricing-section"
    >
      <motion.div
        className={styles.ContentWrapper}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "0px" }}
      >
        <motion.div
          className={styles.Container}
          transition={{ duration: 0.8 }}
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
        >
          <motion.h1
            variants={childVariants}
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ margin: "0px" }}
          >
            Pay once, use forever
          </motion.h1>
          <motion.p
            variants={childVariants}
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ margin: "0px" }}
          >
            At Ultimate Web Weaver, we offer custom, user-centric solutions with
            a one-time payment—no recurring fees. From Web Development to Web
            Designs and Web Maintenance, we provide everything your business
            needs. Using the latest tech stack, we create modern, high-quality
            applications that are built to last.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default PricingTitle;
