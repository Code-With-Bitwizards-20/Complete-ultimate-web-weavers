import { motion } from "framer-motion";
import styles from "./Attention.module.css";

const Attetion = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <>
      <motion.section
        className={styles.Main}
        aria-label="Important Payment Notice"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.ContentWrapper}
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 90 }}
        >
          <motion.div
            className={styles.Container}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px" }}
          >
            <motion.h2
              variants={childVariants}
              initial={{ x: -30 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", delay: 0.1 }}
            >
              Attention Needed !!
            </motion.h2>
            <motion.p
              variants={childVariants}
              initial={{ x: 30 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring", delay: 0.3 }}
            >
              At Ultimate Web Weavers, we prioritize transparency and trust in
              every collaboration. To commence any project, we require a 50%
              advance payment, which formalizes our partnership through a
              detailed contract and allows us to allocate dedicated resources to
              your needs. Rest assured, if we are unable to meet your outlined
              requirements upon project completion, we will promptly refund your
              initial deposit, ensuring your confidence in our commitment. Once
              the work is finalized, we&apos;ll present the deliverables for
              your review. Upon your satisfaction, the remaining 50% payment is
              due, after which full access to the results will be transferred.
              For customized requests beyond our listed services or pricing, we
              invite you to contact us directly—our team is eager to tailor
              solutions that align with your unique goals. &#8212;
              <strong> Together, let&apos;s turn visions into reality. </strong>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Attetion;
