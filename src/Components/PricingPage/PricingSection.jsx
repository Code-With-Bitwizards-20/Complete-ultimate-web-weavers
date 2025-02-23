import { memo, useMemo } from "react";
import PricingCard from "./PricingCard";
import styles from "./PricingSection.module.css";

const PricingSection = () => {
  // Memoized Pricing Plans Data
  const pricingPlans = useMemo(
    () => [
      {
        title: "Basic",
        titleColor: "#E0A247",
        description:
          "Get a fully responsive 2-page website tailored to your needs.",
        price: "399",
        features: [
          "Customizable 2 Frontend Web Pages",
          "4 Revisions & 10 Days Support",
          "Includes Speed Optimization & Social Media Integration",
          "Hosting & Domain Included",
          "Cross-Browser Compatibility",
          "Optimized for mobile, tablet and desktop devices",
        ],
      },
      {
        title: "Premium",
        titleColor: "#e06196",
        description:
          "Get a fully responsive 5-page website customized to fit your needs.",
        price: "799",
        features: [
          "Customizable 5 Frontend Web Pages",
          "10 Revisions & 20 Days Support",
          "Optimization - SEO Setup & Social Media Integration",
          "Hosting & Domain Included",
          "Cross-Browser Compatibility",
          "Optimized for mobile, tablet and desktop devices",
          "High-converting single-page websites",
          "Call-to-action (CTA) buttons & lead capture forms",
          "Premium SEO & Performance Boost",
          "Fully Responsive & Pixel-Perfect Design",
        ],
      },
      {
        title: "Enterprise",
        titleColor: "#E06D47",
        description:
          "A fully optimized 10-page website with advanced features for your needs.",
        price: "1699",
        features: [
          "Customizable 10 Frontend Web Pages",
          "20 Revisions & 30 Days Support",
          "Optimization - SEO Setup & Social Media Integration",
          "Hosting & Domain Included",
          "Cross-Browser Compatibility",
          "Optimized for mobile, tablet and desktop devices",
          "High-converting single-page websites",
          "Call-to-action (CTA) buttons & lead capture forms",
          "10+ Custom Web Pages ( If Required )",
          "E-Commerce & 10+ Products Integration",
          "Premium SEO & Performance Boost",
          "Interactive UI & Smooth Animations",
          "Fully Responsive & Pixel-Perfect Design",
          "Lightning-Fast Load Speed & Core Web Vitals Optimization",
          "clean & well-documented source code included",
        ],
      },
    ],
    []
  );

  return (
    <section className={styles.Main} aria-labelledby="pricing-heading">
      <div className={styles.ContentWrapper}>
        <div className={styles.Container}>
          <h2 className={styles.heading}>Frontend Web Development Pricing</h2>
          <div className={styles.CardsContainer}>
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                titleColor={plan.titleColor}
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

export default memo(PricingSection);
