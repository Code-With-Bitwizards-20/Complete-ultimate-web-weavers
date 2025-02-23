import { motion, AnimatePresence } from "framer-motion";
import styles from "./Sidebar.module.css";
import { RiCloseFill } from "react-icons/ri";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";

const Sidebar12 = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/Our-Work");
  }, [navigate]);

  // Animation variants
  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        when: "beforeChildren",
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", delay: 0.2 },
    },
  };

  const menuItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1 + 0.4 },
    }),
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className={`${styles.SidebarContainer} ${isOpen ? styles.Open : ""}`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={sidebarVariants}
        >
          <motion.div className={styles.Sidebar}>
            <motion.div className={styles.SidebarHeader}>
              <motion.div
                className={styles.LogoContainer}
                variants={logoVariants}
              >
                <Link
                  to="/"
                  aria-label="Go to Home"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src="/Images/ultralatest-min.png"
                    alt="Main Logo"
                    loading="lazy"
                    decoding="async"
                    width={1925}
                    height={1080}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Link>
              </motion.div>

              <motion.div
                className={styles.CloseButton}
                onClick={() => setIsOpen(false)}
                aria-label="Close Sidebar"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setIsOpen(false)}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring" }}
              >
                <RiCloseFill />
              </motion.div>
            </motion.div>

            <motion.nav>
              <ul role="list">
                {["Home", "About-Us", "Services", "Pricing", "Contact-Us"].map(
                  (path, index) => (
                    <motion.li
                      key={path}
                      variants={menuItemVariants}
                      custom={index}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={`/${path.replace(" ", "-")}`}
                        onClick={() => setIsOpen(false)}
                        aria-label={`Go to ${path}`}
                      >
                        {path.replace("-", " ")}
                      </Link>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.nav>

            <motion.button
              className={styles.SidebarButton}
              onClick={() => {
                handleClick();
                setIsOpen(false);
              }}
              aria-label="Go to Our Work"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/Our-Work" aria-label="Go to Our Work">
                Our Work{" "}
                <motion.img
                  src="/Images/akar-icons_arrow-right.svg"
                  alt="Arrow Icon"
                  aria-hidden="true"
                  loading="lazy"
                  whileHover={{ x: 5 }}
                />
              </Link>
            </motion.button>
          </motion.div>

          <motion.div
            className={styles.Overlay}
            onClick={() => setIsOpen(false)}
            aria-label="Close Sidebar Overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

Sidebar12.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default memo(Sidebar12);
