

import { memo, useMemo } from "react";
import PricingCard from "./PricingCard";
import styles from "./WebDesign.module.css";

const WebDesigning = () => {
  // Memoized Pricing Plans Data
  const pricingPlans = useMemo(
    () => [
      {
        title: "Basic",
        titleColor: "#E0A247",
        description:
          "Crafting Stunning, Scalable & Future-Ready Web Designs – 2 Pages",
        price: "349",
        features: [
          "Custom Tailored designs that reflect your brand identity",
          "4 Revisions & 10 Days Support",
          "Responsive Design - including mobile, tablet, and desktop",
          "Modern Header - Clear navigation & strong CTA",
          "Engaging Body - Stunning visuals & smooth UX",
          "Optimized Footer - Quick links & social media",
          "Clean, modern & visually appealing layouts",
          "Sleek & Scalable Web Design – 2 Pages",
        ],
      },
      {
        title: "Premium",
        titleColor: "#e06196",
        description:
          "Creating Modern, Scalable & Future-Ready Web Designs – 5 Pages",
        price: "749",
        features: [
          "Custom Tailored designs that reflect your brand identity",
          "10 Revisions & 20 Days Support",
          "Responsive Design - including mobile, tablet, and desktop",
          "Modern Header - Clear navigation & strong CTA",
          "Engaging Body - Stunning visuals & smooth UX",
          "Optimized Footer - Quick links & social media",
          "Clean, modern & visually appealing layouts",
          "Sleek & Scalable Web Design – 5 Pages",
          "Intuitive UX - Easy navigation & user-friendly interactions",
          "Animations, hover effects & microinteractions",
          "Clean, modern, and clutter-free layouts",
          "Dark & Light mode Enhancing user preference and comfort",
          "100% customized solutions tailored to your goals",
          "Modern designs that grow with your business needs",
          "Scalable & Future-Ready Web Designs – 5 Pages",
        ],
      },
      {
        title: "Enterprise",
        titleColor: "#E06D47",
        description:
          "Experience a Custom, Modern, Scalable Web Design – 10 Pages",
        price: "1649",
        features: [
          "Custom Tailored designs that reflect your brand identity",
          "20 Revisions & 30 Days Support",
          "Responsive Design - including mobile, tablet, and desktop",
          "Modern Header - Clear navigation & strong CTA",
          "Engaging Body - Stunning visuals & smooth UX",
          "optimized Footer - Quick links & social media",
          "Clean, modern & visually appealing layouts",
          "Sleek & Scalable Web Design – 10 Pages",
          "Intuitive UX - Easy navigation & user-friendly interactions",
          "Animations, hover effects & microinteractions",
          "Clean, modern, and clutter-free layouts",
          "Dark & Light mode Enhancing user preference and comfort",
          "100% customized solutions tailored to your goals",
          "Modern designs that grow with your business needs",
          "Scalable & Future-Ready Web Designs – 10 Pages",
          "High-Converting Landing Pages & Multi-Page Websites",
          "Scalable, Secure & Future-Ready Web Solutions",
          "Tailor-Made Solutions to Elevate Your Brand",
          "Interactive, Engaging, & Performance-Driven Web Designs",
        ],
      },
    ],
    []
  );

  return (
    <section className={styles.Main} aria-labelledby="web-design-heading">
      <div className={styles.ContentWrapper}>
        <div className={styles.Container}>
          <h2 className={styles.heading}>
            Custom Web Design &ndash; Clear Upfront Pricing
          </h2>
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

export default memo(WebDesigning);
