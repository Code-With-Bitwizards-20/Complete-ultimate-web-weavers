import { motion } from "framer-motion";
import styles from "./OurWorkContainer.module.css";
import { useMemo } from "react";

const OurWorkContainer = () => {
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "E-commerce Platform",
        description:
          "Full-stack e-commerce platform with product listings, order management, and payment processing. 100% responsive design across all screen sizes.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        image: "/Images/Ecommerce.png",
        link: "https://imaginative-valkyrie-f0aced.netlify.app/", // Add your actual links
      },
      {
        id: 2,
        title: "Sanze Beaty Menu Page",
        description:
          "Advanced beauty service portal featuring adaptive screen-specific layouts and modern UI/UX principles. Built with cutting-edge web technologies.",
        tags: ["React js", "CSS3", "JavaScript"],
        image: "/Images/Vite-React.png",
        link: "https://67b0c12c1684907deba1f110--golden-figolla-b6f398.netlify.app/",
      },
      {
        id: 3,
        title: "Bliz Services Website",
        description:
          "Corporate solutions platform developed using multiple programming languages and frameworks. Implements responsive design across all devices.",
        tags: ["React js", "CSS3", "Next js"],
        image: "/Images/Bliz.png",
        link: "https://blizservices.com/",
      },
      {
        id: 4,
        title: "Elta Health Website",
        description:
          "Medical/non-medical provider platform offering digital health management tools. Enables clients to maintain active lifestyles through web services.",
        tags: ["React js", "Next js", "Tailwind Css"],
        image: "/Images/Healthcare.png",
        link: "https://eltahealthcare.com/",
      },
      {
        id: 5,
        title: "RecovIP Website",
        description:
          "Dynamic coaching consultancy platform providing personalized development programs. Empowers users through tailored growth strategies and resources.",
        tags: ["React js", "Gsap", "Tailwind Css"],
        image: "/Images/Recovip.png",
        link: "https://recovip.vercel.app/",
      },
      {
        id: 6,
        title: "JOptiman Agy Website",
        description:
          "Financial services collective with expert partnerships specializing in strategic planning. Delivers customized fiscal solutions through digital platforms.",
        tags: ["React js", "CSS3", "Next js"],
        image: "/Images/JOptiman.png",
        link: "https://joptimanconsultancy.com/",
      },
    ],
    []
  );

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  // Stagger animation for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // Hover animations
  const hoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  // Image hover effect
  const imageHover = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };

  // Button arrow animation
  const arrowVariants = {
    rest: { x: 0 },
    hover: { x: 5 },
  };

  return (
    <motion.section
      className={styles.Main}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-100px", once: true }}
    >
      <div className={styles.ContentWrapper}>
        <h2 className={styles.SectionHeading}>Explore Our Latest Projects</h2>
        <motion.div
          className={styles.Container}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.Card}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true }}
              transition={{ type: "spring" }}
            >
              <motion.figure
                className={styles.ImageWrapper}
                variants={hoverVariants}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className={styles.Image}
                  loading="eager"
                  initial="rest"
                  whileHover="hover"
                  width={1349}
                  height={614}
                  {...{ fetchpriority: "high" }}
                  variants={imageHover}
                  transition={{ duration: 0.3 }}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </motion.figure>

              <motion.div className={styles.CardContent}>
                <motion.div
                  className={styles.Tags}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className={styles.Tag}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.h3
                  className={styles.Title}
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  transition={{ type: "spring" }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className={styles.Description}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>

                <motion.a
                  href={project.link}
                  className={styles.CardButton}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial="rest"
                  whileHover="hover"
                  variants={arrowVariants}
                >
                  View Project &nbsp; →
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurWorkContainer;
