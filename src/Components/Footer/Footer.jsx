import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <motion.footer
      className={styles.Main}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      aria-label="Website footer"
    >
      <div className={styles.ContentWrapper}>
        <div className={styles.UpperPart}>
          {/* Image Column */}
          <motion.section
            className={styles.FooterColumn}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            aria-labelledby="footer-logo"
          >
            <div className={styles.ImageContainer}>
              <motion.img
                src="/Images/footer-div.png"
                alt="Company Logo"
                width={1925}
                height={1080}
                onClick={handleClick}
                loading="lazy"
                decoding="async"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
            <nav>
              <ul>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" }}
                >
                  <Link to="/About-Us">About Us</Link>
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" }}
                >
                  <Link to="/Services">Services</Link>
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" }}
                >
                  <Link to="/Pricing">Pricing</Link>
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" }}
                >
                  <Link to="/Contact-Us">Contact Us</Link>
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" }}
                >
                  <Link to="/Our-Work">Our Work</Link>
                </motion.li>
              </ul>
            </nav>
          </motion.section>

          {/* Services Column */}
          <motion.section
            className={styles.FooterColumn}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            aria-labelledby="footer-services"
          >
            <div className={styles.HeaderPlaceholder}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Services
              </motion.h3>
            </div>
            <nav>
              <ul>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" }}
                >
                  <Link to="/Services">Web Design</Link>
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" }}
                >
                  <Link to="/Services">Web Development</Link>
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" }}
                >
                  <Link to="/Services">Web Maintenance</Link>
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" }}
                >
                  <Link to="/Services">SEO</Link>
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" }}
                >
                  <Link to="/Services">Web Ranking</Link>
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring" }}
                >
                  <Link to="/Services">Web Optimization</Link>
                </motion.li>
              </ul>
            </nav>
          </motion.section>

          {/* Legal Column */}
          <motion.section
            className={styles.FooterColumn}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            aria-labelledby="footer-legal"
          >
            <div className={styles.HeaderPlaceholder}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Legal
              </motion.h3>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Disclaimer – A statement limiting liability for information
              provided on the website. Refund & Cancellation Policy – If you
              sell services, clarify your terms for refunds or cancellations.
              Copyright Notice – A section explaining content ownership and
              usage rights.
            </motion.p>
          </motion.section>

          {/* Get in Touch Column */}
          <motion.section
            className={styles.FooterColumn}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
            aria-labelledby="footer-contact"
          >
            <div className={styles.HeaderPlaceholder}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                Get in Touch
              </motion.h3>
            </div>
            <ul>
              <motion.li whileHover={{ x: 10 }} transition={{ type: "spring" }}>
                <a
                  href="https://wa.me/447720606626"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +44 7720 60 6626
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 10 }} transition={{ type: "spring" }}>
                <a href="mailto:Ultimatewebweaver@gmail.com">
                  Ultimatewebweaver@gmail.com
                </a>
              </motion.li>
            </ul>

            <div className={styles.SocialIcons}>
              <motion.a
                href="https://www.facebook.com/share/15Errzm7aT/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.SocialLink}
                aria-label="Facebook"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaFacebook className={styles.SocialIcon} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/unlimitedwebweaver?igsh=MXdpbjduNDU3N3Npeg=="
                target="_blank"
                rel="noopener noreferrer"
                className={styles.SocialLink}
                aria-label="Instagram"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaInstagram className={styles.SocialIcon} />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@ultimate.web.weav?_t=ZN-8tepEYTdKxa&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.SocialLink}
                aria-label="TikTok"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaTiktok className={styles.SocialIcon} />
              </motion.a>
              <motion.a
                href="https://uk.linkedin.com/in/ultimate-weaver-1a325b34b"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.SocialLink}
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedinIn className={styles.SocialIcon} />
              </motion.a>
            </div>
          </motion.section>
        </div>

        {/* Lower Part */}
        <motion.div
          className={styles.LowerPart}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className={styles.Copyright}>
            &copy; 2025 | All Rights Reserved. Designed & Coded by{" "}
            <motion.a
              href="https://wa.me/923496274499"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, color: "#4CAF50" }}
            >
              Code With Bitwizards
            </motion.a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
