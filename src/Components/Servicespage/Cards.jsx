import { motion } from "framer-motion";
import styles from "./Cards.module.css";
import { memo } from "react";

const Cards12 = () => {
  const cardsData = [
    {
      image: "/Images/fit-wali.jpg",
      title: "Web Designing",
      description:
        "Crafting digital experiences that captivate and convert. We blend cutting-edge web design with robust development, transforming your vision into a stunning online reality.  Let us build your digital masterpiece – where form meets function, and your brand shines online. Elevate your online presence today.",
    },
    {
      image: "/Images/python.jpg",
      title: "Web Development",
      description:
        "Powering your digital future with expert web development.  From dynamic websites to complex web applications, we build robust, scalable solutions tailored to your business needs.  Let our skilled developers bring your ideas to life with clean code and innovative technology.  Launch your success story online.",
    },
    {
      image: "/Images/main.jpg",
      title: "Web Maintenance",
      description:
        "Keep your website running smoothly and securely with our proactive web maintenance services. We handle updates, security patches, and performance optimization, so you can focus on your business.  Rest easy knowing your online presence is always up-to-date, protected, and performing at its best.",
    },
    {
      image: "/Images/SEO9.jpg",
      title: "Web SEO",
      description:
        "Unlock your website's true potential with our results-driven SEO services. We boost your online visibility, attract targeted traffic, and improve your search engine rankings.  Dominate search results and drive organic growth with our expert SEO strategies. Get found. Get noticed. Get results.",
    },
    {
      image: "/Images/ranking.jpg",
      title: "Web Ranking",
      description:
        "Climb the search engine ranks and dominate your competition with our proven web ranking strategies. We optimize your website for maximum visibility, driving targeted traffic and boosting your online authority.  Get seen by more customers and achieve your business goals with higher search engine rankings.",
    },
    {
      image: "/Images/op.jpg",
      title: "Web Optimization",
      description:
        "Maximize your website's performance and user experience with our expert web optimization services. We fine-tune your site for speed, responsiveness, and accessibility, ensuring a seamless experience for every visitor.  Boost conversions, improve engagement, and unlock your website's full potential with optimization.",
    },
  ];

  // Animation configurations
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: 45,
      scale: 0.8,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.5,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      rotateZ: 0.5,
      transition: { duration: 0.4 },
    },
    tap: { scale: 0.98 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className={styles.Main}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-20%" }}
    >
      <div className={styles.ContentWrapper}>
        <motion.div
          className={styles.cardGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className={styles.Card}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
              }}
              whileTap="tap"
            >
              <motion.div
                className={styles.ImageContainer}
                variants={imageVariants}
              >
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className={styles.cardImage}
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.09, rotateZ: 1.01 }}
                  width="100%"
                  height="auto"
                  loading="eager"
                  decoding="async"
                  {...{ fetchpriority: "high" }}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </motion.div>

              <motion.div
                className={styles.TextContent}
                variants={contentVariants}
              >
                <motion.h2
                  className={styles.cardTitle}
                  initial={{ x: -30 }}
                  whileInView={{ x: 0 }}
                >
                  {card.title}
                </motion.h2>

                <motion.p
                  className={styles.cardDescription}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {card.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(Cards12);
