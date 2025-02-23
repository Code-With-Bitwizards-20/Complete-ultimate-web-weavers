import { motion } from "framer-motion";
import HeroSection3 from "../HeroSSetion 3/HeroSection-3";
import styles from "./Story.module.css";
import StartIt from "./Start";

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
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const paragraphVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const Story = () => {
  return (
    <>
      <main>
        <section className={styles.Main} aria-labelledby="story-section-title">
          <motion.div
            className={styles.ContentWrapper}
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <motion.div
              className={styles.Container}
              variants={containerVariants}
            >
              <motion.h1 variants={headerVariants}>
                We&apos;re a team of passionate digital creatives.
              </motion.h1>
              <motion.p variants={paragraphVariants}>
                Ultimate Web Weavers is a powerhouse of digital creativity,
                equipped with a talented team of designers, developers,
                consultants, data analysts, engineers, and strategists. Equipped
                with over two decades of experience and a passion for
                innovation, we specialize in crafting visually stunning and
                user-centric business systems that captivate audiences from
                different business ventures. We combine our technical
                proficiency with a deep understanding of the latest industry
                trends and best practices, ensuring your business remains ahead
                of the curve.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>
        <HeroSection3 />
        <StartIt />
      </main>
    </>
  );
};

export default Story;
