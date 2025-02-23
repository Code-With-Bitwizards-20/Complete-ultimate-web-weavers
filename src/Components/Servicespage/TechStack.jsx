import { motion } from "framer-motion";
import styles from "./TechStack.module.css";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const TechStack = () => {
  return (
    <motion.section
      className={styles.Main}
      aria-label="Tech Stack and Tools"
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-100px" }} 
      variants={containerVariants}
    >
      <div className={styles.ContentWrapper}>
        <div className={styles.Container}>
          <motion.h2 variants={titleVariants}>
            Tech Stack &amp; Tools &#128640;
          </motion.h2>

          <motion.div
            className={styles.CardContainer}
            variants={containerVariants}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={styles.Card}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.UlContainer}>
                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-100px" }} 
                  >
                    {[
                      [
                        "HTML5",
                        "CSS3",
                        "BootStrap5",
                        "JavaScript",
                        "ES6",
                        "Gsap",
                      ],
                      [
                        "Tailwind CSS",
                        "React Js",
                        "Framer Motion",
                        "Next Js",
                        "Node Js",
                        "Express Js",
                      ],
                      [
                        "Mongo DB",
                        "WordPress",
                        "Divi Themes",
                        "Web Development",
                        "Web Optimization",
                        "Vite",
                      ],
                    ][index].map((item, i) => (
                      <motion.li
                        key={item}
                        variants={listItemVariants}
                        transition={{ delay: i * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
