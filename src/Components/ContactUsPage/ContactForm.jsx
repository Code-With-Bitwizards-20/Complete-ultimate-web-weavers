import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    success: false,
  });

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!formData.from_name || !formData.from_email) {
        setPopup({
          show: true,
          message: "Please fill in all required fields",
          success: false,
        });
        return;
      }

      emailjs
        .send(
          "service_zsd6g0j",
          "template_dg2ul0h",
          formData,
          "0IWPGmsaDtFB9z23f"
        )
        .then(
          () => {
            setPopup({
              show: true,
              message: "Message sent successfully!",
              success: true,
            });
            setFormData({
              from_name: "",
              from_email: "",
              phone: "",
              subject: "",
              message: "",
            });
            setTimeout(
              () => setPopup({ show: false, message: "", success: false }),
              3000
            );
          },
          (error) => {
            setPopup({
              show: true,
              message: "Failed to send message. Try again later.",
              success: false,
            });
            console.error("EmailJS Error:", error);
            setTimeout(
              () => setPopup({ show: false, message: "", success: false }),
              3000
            );
          }
        );
    },
    [formData]
  );

  return (
    <div className={styles.Main}>
      <div className={styles.ContentWrapper}>
        <div className={styles.Container}>
          {popup.show && (
            <div
              className={
                popup.success ? styles.SuccessPopup : styles.ErrorPopup
              }
            >
              {popup.message}
            </div>
          )}

          <form className={styles.Form} onSubmit={handleSubmit}>
            <div className={styles.Row}>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className={styles.Input}
                autoComplete="off"
                required
                value={formData.from_name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className={styles.Input}
                autoComplete="off"
                required
                value={formData.from_email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.Row}>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className={styles.Input}
                autoComplete="off"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className={styles.Input}
                autoComplete="off"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className={styles.Row}>
              <textarea
                name="message"
                placeholder="Your Message"
                className={styles.Textarea}
                autoComplete="off"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              className={styles.HeroButton}
              type="submit"
              onClick={(e) => e.preventDefault()}
            >
              <a href="#" onClick={(e) => handleSubmit(e)}>
                Send Message
                <img
                  src="/Images/akar-icons_arrow-right.svg"
                  alt="Arrow Icon"
                  aria-hidden="true"
                  width={16}
                  height={16}
                  loading="lazy"
                />
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
