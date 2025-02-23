import { motion } from "framer-motion";
import styles from "./Start.module.css";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const paragraphVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const StartIt = () => {
  return (
    <>
      <section className={styles.Main} aria-labelledby="start-section-title">
        <motion.div
          className={styles.ContentWrapper}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <motion.div className={styles.Container} variants={containerVariants}>
            <motion.h2 variants={headerVariants}>
              Let&apos;s get started and achieve your goals !!
            </motion.h2>
            <motion.p variants={paragraphVariants}>
              Let&apos;s embark on a collaborative journey to create something
              truly exceptional. We are committed to delivering stunning and
              engaging experiences, crafting compelling narratives, and sparking
              exciting movements that drive you and your projects forward. Our
              dedication goes beyond mere transactions—we are fully invested in
              your success. We take the time to understand your unique vision
              and goals, working tirelessly to bring them to life. Your
              achievements are not just a reflection of our success. they are
              the driving force behind our passion and commitment. We believe in
              building long-term partnerships founded on open communication and
              mutual respect. With expert guidance and unwavering support, we
              ensure your project not only meets but exceeds expectations.
              Together, we can create something remarkable that leaves a lasting
              impact.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default StartIt;
