import { motion } from "framer-motion";
import styles from "./PricingCard.module.css";
import PropTypes from "prop-types";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { memo, useMemo } from "react";

const PricingCard = ({ title, titleColor, description, price, features }) => {
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  // List animation variants
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Memoized feature variants to maintain stable reference
  const featureVariants = useMemo(
    () => ({
      hidden: { x: -30, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    }),
    []
  );

  // Memoized feature list with proper dependencies
  const renderedFeatures = useMemo(
    () =>
      features.map((feature, index) => (
        <motion.li
          key={index}
          className={styles.feature}
          variants={featureVariants}
        >
          <TiTick className={styles.icon} aria-hidden="true" /> {feature}
        </motion.li>
      )),
    [features, featureVariants] 
  );

  return (
    <motion.article
      className={styles.card}
      aria-labelledby="pricing-title"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      transition={{ type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.04 }}
    >
      <motion.h2
        className={styles.title}
        style={{ color: titleColor }}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        {title}
      </motion.h2>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {description}
      </motion.p>

      <motion.div
        className={styles.price}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", delay: 0.4 }}
      >
        <span className={styles.dollar}>&#163;</span> {price}
      </motion.div>

      <Link
        to="https://wa.me/447720606626"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ButtonAcherTag}
      >
        <motion.button
          className={styles.button}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "0px 0px -100px 0px" }}
        >
          Get Started
        </motion.button>
      </Link>

      <motion.ul
        className={styles.features}
        aria-label="Included Features"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
      >
        {renderedFeatures}
      </motion.ul>
    </motion.article>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default memo(PricingCard);
