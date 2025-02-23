import { memo, useMemo } from "react";
import PricingCard from "./PricingCard";
import styles from "./Backend.module.css";

const BackendSection = () => {
  // Memoized Pricing Plans Data
  const pricingPlans = useMemo(
    () => [
      {
        title: "Basic",
        titleColor: "#E0A247",
        description:
          "Get a Sleek & Scalable Full-Stack Web Development – 2 Pages 🚀",
        price: "749",
        features: [
          "Custom Full Stack Web Development (Frontend + Backend)",
          "4 Revisions & 10 Days Support",
          "MongoDB, Express.js, React.js, Node.js",
          "Hosting & Domain Included",
          "API integration and development",
          "Optimized for mobile, tablet and desktop devices",
          "Scalable, secure, and fast-loading applications",
          "Sleek & Scalable Full-Stack Web Development – 2 Pages",
        ],
      },
      {
        title: "Premium",
        titleColor: "#e06196",
        description:
          "Get a Dynamic & High-Performance Full-Stack Web Solution – 5 Pages 🚀",
        price: "1849",
        features: [
          "Custom Full Stack Web Development (Frontend + Backend)",
          "10 Revisions & 20 Days Support",
          "Optimization - SEO Setup & Social Media Integration",
          "Hosting & Domain Setup for 1 year",
          "MongoDB, Express.js, React.js, Node.js",
          "API integration and development",
          "Cross-Browser Compatibility",
          "Optimized for mobile, tablet and desktop devices",
          "Custom API Development & Third-Party Integrations",
          "High-converting single-page websites",
          "Premium SEO & Performance Boost",
          "Fully Responsive & Pixel-Perfect Design",
          "100% customized solutions tailored to your goals",
          "High-Performance Full-Stack Web Solution – 5 Pages",
          "Includes a CMS for easy updates and control",
        ],
      },
      {
        title: "Enterprise",
        titleColor: "#E06D47",
        description:
          "Get a Custom-Built, Scalable Full-Stack Web Experience – 10 Pages 🚀",
        price: "3799",
        features: [
          "Bespoke Full-Stack Web Development (Frontend + Backend)",
          "20 Revisions & 30 Days Support",
          "Optimization - SEO Setup & Social Media Integration",
          "Hosting & Domain Setup for 1 year",
          "Seamless Cross-Browser & Cross-Platform Compatibility",
          "Optimized for mobile, tablet and desktop devices",
          "High-converting single-page websites",
          "React.js, Next.js, Express js, Node.js, MongoDB",
          "Custom API Development & Third-Party Integrations",
          "10+ Custom Web Pages ( If Required )",
          "E-Commerce & 10+ Products Integration",
          "High-Converting Landing Pages & Multi-Page Websites",
          "Scalable, Secure & Future-Ready Web Solutions",
          "Tailor-Made Solutions to Elevate Your Brand",
          "Secure Database Setup for Smooth Performance",
          "Premium SEO & Performance Boost",
          "Tailor-Made Solutions to Elevate Your Brand",
          "Fully Responsive & Pixel-Perfect Design",
          "Lightning-Fast Load Speed & Core Web Vitals Optimization",
          "clean & well-documented source code included",
          "Interactive & Performance-Driven Web Applications",
          "High-Performance Full-Stack Web Solution – 10 Pages",
          "Includes a CMS for easy updates and control",
        ],
      },
    ],
    []
  );

  return (
    <section className={styles.Main} aria-labelledby="backend-heading">
      <div className={styles.ContentWrapper}>
        <div className={styles.Container}>
          <h2 className={styles.heading}>Full Stack Web Development Pricing</h2>
          <div className={styles.CardsContainer}>
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                titleColor={plan.titleColor} // Kept unchanged
                description={plan.description}
                price={plan.price}
                features={plan.features}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BackendSection);
