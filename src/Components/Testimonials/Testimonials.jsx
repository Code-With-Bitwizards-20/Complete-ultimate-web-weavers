import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Testimonials.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Testimonials = () => {
  const testimonials = useMemo(
    () => [
      {
        image: "/Images/team-1-1.webp",
        text: "The team at Ultimate Web Weavers completely revitalized our online presence with a sleek, mobile-first website design that boosted our mobile engagement by 140%. Their attention to user experience transformed casual visitors into loyal customers.",
        name: "Emily Chen",
        designation: "Marketing Director",
        company: "LuxeFashion",
      },
      {
        image: "/Images/team-1-2.webp",
        text: "Working with Ultimate Web Weavers was a game-changer. They took our vision and turned it into reality, delivering an intuitive and scalable web platform. From concept to launch, their web development team delivered a flawless e-commerce platform ahead of schedule.",
        name: "John Doe",
        designation: "Founder",
        company: "GreenBasket Organics",
      },
      {
        image: "/Images/team-1-3.webp",
        text: "Absolutely phenomenal! The UI/UX design improved our customer retention by 200%. Highly recommend their services. They transformed our outdated site into a modern lead-generating machine with intuitive UX/UI. This has been the reason for our success.",
        name: "Sophia Martinez",
        designation: "Product Manager",
        company: "NextGen Apps",
      },
      {
        image: "/Images/team-1-4.webp",
        text: "Their innovative solutions and dedication to perfection helped us scale our online store to new heights. 24/7 support team fixed critical bugs within minutes - true partners in web maintenance. Our monthly sales increased by 170%.",
        name: "James Anderson",
        designation: "E-commerce Director",
        company: "ShopSphere",
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");

  const nextSlide = useCallback(() => {
    setSlideDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setSlideDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: slideDirection === "next" ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: slideDirection === "next" ? -100 : 100 },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, delay: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
  };

  return (
    <motion.section
      className={styles.Main}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={containerVariants}
    >
      <div className={styles.ContentWrapper}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={currentIndex}
            className={styles.Container}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div
              className={styles.ImageContainer}
              variants={imageVariants}
            >
              <img
                src={testimonials[currentIndex].image}
                alt={`Testimonial from ${testimonials[currentIndex].name}`}
                {...{ fetchpriority: "high" }}
                width={270}
                height={370}
                loading="eager"
                decoding="async"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </motion.div>

            <motion.div
              className={styles.TextContainer}
              variants={textVariants}
            >
              <motion.p className={styles.Paragraph}>
                “{testimonials[currentIndex].text}”
              </motion.p>
              <motion.h3>{testimonials[currentIndex].name}</motion.h3>
              <motion.p className={styles.Designation}>
                {testimonials[currentIndex].designation}
              </motion.p>
              <motion.div className={styles.SocialMedia}>
                <p>{testimonials[currentIndex].company}</p>
              </motion.div>
              <div className={styles.Buttons}>
                <motion.button
                  className={styles.left}
                  onClick={prevSlide}
                  aria-label="Previous Testimonial"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaArrowLeft aria-hidden="true" />
                </motion.button>
                <motion.button
                  className={styles.right}
                  onClick={nextSlide}
                  aria-label="Next Testimonial"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaArrowRight aria-hidden="true" />
                </motion.button>
              </div>
            </motion.div>
          </motion.article>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Testimonials;
