import { motion } from "framer-motion";
import styles from "./Services1.module.css";

const containerVariants = {
  hidden: { opacity: 0, x: -100, rotate: -10 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, x: -100, rotate: -10 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, x: -100, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Services1 = () => {
  return (
    <>
      <section className={styles.Main} aria-labelledby="services-heading">
        <motion.div
          className={styles.ContentWrapper}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <motion.div className={styles.Container} variants={containerVariants}>
            <motion.h1 variants={headerVariants}>Our Services.</motion.h1>
            <motion.p variants={paragraphVariants}>
              At Ultimate Web Weaver, we know that in today&apos;s digital age,
              a strong online presence is crucial for any business. We are your
              one stop hub for all your digital needs, with our services ranging
              from development, marketing, and branding. We develop custom user
              centric applications to meet every business need. We use the
              latest tech stack to ensure that each individual project
              doesn&apos;t only look good, function as intended but also meet
              modern design and coding standards.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Services1;
