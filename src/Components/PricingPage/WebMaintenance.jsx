import { memo, useMemo } from "react";
import PricingCard from "./PricingCard";
import styles from "./WebMaintenance.module.css";

const WebMaintenance = () => {
  // Memoized Pricing Plans Data
  const pricingPlans = useMemo(
    () => [
      {
        title: "Basic",
        titleColor: "#E0A247",
        description: "One-Off Website Enhancement – Immediate Improvements",
        price: "199",
        features: [
          "Updating visuals for a more engaging main content area",
          "Updating Card elements for engaging main content area",
          "Enhancing header navigation for clarity and user engagement",
          "Updating quick links alongside social media features",
          "Clean, modern & visually appealing layout Elements",
          "Applying clean, modern, and attractive design elements",
          "Updating Any part in Web Page as per Client Requirement",
          "Updating Heading, Paragraph, Cards, Buttons & Others",
          "Includes All Type of Websites & Web Pages",
        ],
      },
      {
        title: "Premium",
        titleColor: "#e06196",
        description: "Weekly Website Maintenance – Continuous Enhancements",
        price: "449",
        features: [
          "Updating visuals for a more engaging main content area",
          "Updating Card elements for engaging main content area",
          "Enhancing header navigation for clarity and user engagement",
          "Updating quick links alongside social media features",
          "Clean, modern & visually appealing layout Elements",
          "Applying clean, modern, and attractive design elements",
          "Updating Any part in Web Page as per Client Requirement",
          "Updating Heading, Paragraph, Cards, Buttons & Others",
          "Includes All Type of Websites & Web Pages",
          "Regularly refreshing website content and updates",
          "Enhancing site speed and functionality",
          "Maintenance of E-commerce Websites Products and others",
          "Includes Web Optimization, Web Ranking & SEO",
        ],
      },
      {
        title: "Enterprise",
        titleColor: "#E06D47",
        description: "Monthly Website Maintenance – Premium Support",
        price: "1199",
        features: [
          "Updating visuals for a more engaging main content area",
          "Updating Card elements for engaging main content area",
          "Enhancing header navigation for clarity and user engagement",
          "Updating quick links alongside social media features",
          "Clean, modern & visually appealing layout Elements",
          "Applying clean, modern, and attractive design elements",
          "Dark & Light mode Enhancing user preference and comfort",
          "100% customized solutions tailored to your goals",
          "Updating Any part in Web Page as per Client Requirement",
          "Updating Heading, Paragraph, Cards, Buttons & Others",
          "Includes All Type of Websites & Web Pages",
          "Regularly refreshing website content and updates",
          "Enhancing site speed and functionality",
          "Maintenance of E-commerce Websites Products and others",
          " Identify and fix any broken links to maintain site integrity",
          "Premium SEO & Performance Boost",
          "Lightning-Fast Load Speed & Core Web Vitals Optimization",
          "Get your Site Updated & Fresh for a Month as per Requirements",
          "Includes Web Optimization, Web Ranking & SEO",
        ],
      },
    ],
    []
  );

  return (
    <section className={styles.Main} aria-labelledby="web-maintenance-heading">
      <div className={styles.ContentWrapper}>
        <div className={styles.Container}>
          <h2 className={styles.heading}>
            All-Inclusive Website Maintenance Plans
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

export default memo(WebMaintenance);
