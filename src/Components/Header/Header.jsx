import { motion } from "framer-motion";
import styles from "./Header.module.css";
import { RiMenu3Fill } from "react-icons/ri";
import { useState, useCallback, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar12 from "../Sidebar/Sidebar12";

// Animation configurations
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 + 0.3 },
  }),
};

const logoVariants = {
  hover: { scale: 1.03, transition: { type: "spring", stiffness: 300 } },
};

const Header = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback((state) => {
    setIsSidebarOpen(state);
    document.body.style.overflow = state ? "hidden" : "visible";
  }, []);

  const handleWorkNavigation = () => {
    navigate("/Our-Work");
  };

  return (
    <>
      <motion.header
        className={styles.Main}
        role="banner"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className={styles.ContentWrapper}>
          <div className={styles.Container}>
            {/* Animated Logo */}
            <motion.div
              className={styles.ImageContainer}
              whileHover="hover"
              variants={logoVariants}
            >
              <Link to="/" aria-label="Go to Home">
                <img
                  src="/Images/footer-div.png"
                  alt="Company Logo"
                  width={1925}
                  height={1080}
                  loading="lazy"
                  decoding="async"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </motion.div>

            {/* Navigation Menu */}
            <nav className={styles.Navbar} aria-label="Primary Navigation">
              <motion.ul role="list" initial="hidden" animate="visible">
                <motion.li
                  variants={navItemVariants}
                  custom={0}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to="/" aria-current="page">
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  variants={navItemVariants}
                  custom={1}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to="/About-Us">About us</Link>
                </motion.li>
                <motion.li
                  variants={navItemVariants}
                  custom={2}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to="/Services">Services</Link>
                </motion.li>
                <motion.li
                  variants={navItemVariants}
                  custom={3}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to="/Pricing">Pricing</Link>
                </motion.li>
                <motion.li
                  variants={navItemVariants}
                  custom={4}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to="/Contact-Us">Contact us</Link>
                </motion.li>
              </motion.ul>

              {/* Our Work button (unchanged) */}

              <motion.button
                className={styles.HeaderButton}
                onClick={handleWorkNavigation}
                whileHover={{ scale: 1.05 }}
              >
                <Link to="/Our-Work">
                  Our Work{" "}
                  <img
                    src="/Images/akar-icons_arrow-right.svg"
                    alt="Arrow Icon"
                    width={16}
                    height={16}
                    aria-hidden="true"
                    loading="lazy"
                  />
                </Link>
              </motion.button>

              {/* Sidebar Toggle Button */}
              <motion.button
                className={styles.Humburger}
                onClick={() => toggleSidebar(true)}
                aria-label="Open navigation menu"
                aria-expanded={isSidebarOpen}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <RiMenu3Fill />
              </motion.button>
            </nav>
          </div>
        </div>
      </motion.header>

      <Sidebar12 isOpen={isSidebarOpen} setIsOpen={toggleSidebar} />
    </>
  );
};

export default memo(Header);
