
import { motion } from "framer-motion";
import styles from "./Paragraph.module.css";
import { memo } from "react";

const ParagraphSection = () => {
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
      aria-labelledby="pricing-heading"
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
            Customization Pricing Tailored to Your Needs !!
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", delay: 0.4 }}
          >
            UltimateWebWeaver delivers precision-crafted digital solutions
            through bespoke pricing models calibrated to your project&apos;s
            technical complexity, creative scope, and functional requirements.
            We transcend template limitations by engineering adaptive web
            architectures, performance-optimized integrations, and
            enterprise-grade ecosystems—all meticulously scoped to align with
            your operational objectives and budgetary parameters. Our
            collaborative development process merges innovative execution with
            fiscal accountability, transforming strategic concepts into
            competitive digital assets. Share your vision for a tailored
            technical blueprint and ROI-driven implementation roadmap, elevating
            your online presence through our consultative expertise.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default memo(ParagraphSection);
