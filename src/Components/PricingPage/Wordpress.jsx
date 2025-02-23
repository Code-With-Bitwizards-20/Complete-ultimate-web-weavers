import { memo, useMemo } from "react";
import PricingCard from "./PricingCard";
import styles from "./Wordpress.module.css";

const Wordpress = () => {
  // Memoized Pricing Plans Data
  const pricingPlans = useMemo(
    () => [
      {
        title: "Basic",
        titleColor: "#E0A247",
        description:
          "Startups, small businesses, or portfolio sites needing a professional online presence.",
        price: "449",
        features: [
          "Custom WordPress theme installation",
          "Mobile-responsive design",
          "Basic SEO setup / meta titles / descriptions",
          "Updating quick links alongside social media features",
          "Social media integration (links/icons)",
          "Applying clean, modern, and attractive design elements",
          "1 round of revisions & 10 days Support",
          "HomePage / About Us / Services/Products (up to 5 items)",
          "Contact Page (with form) / Blog Setup (1-3 sample posts)",
          "Limit of Total 3 Pages as per Customer Requirements",
        ],
      },
      {
        title: "Premium",
        titleColor: "#e06196",
        description:
          "Growing businesses, e-commerce, or service providers with advanced needs.",
        price: "899",
        features: [
          "Custom WordPress theme installation",
          "Mobile-responsive design",
          "All Basic pages +",
          "Custom Services/Portfolio (up to 10 items)",
          "FAQ / Testimonials",
          "HomePage / About us / Contact Page / Pricing Page",
          "Clean, modern & visually appealing layout Elements",
          "Advanced Blog (categories, tags, search)",
          "Custom theme design (tailored to brand guidelines)",
          "Advanced SEO (keyword research, schema markup)",
          "Performance optimization (caching, image compression)",
          "3rd-party plugin integrations (e.g., Mailchimp, Calendly)",
          "3 rounds of revisions / 20 days support",
          "Basic E-Commerce Setup & Integration",
          "Includes Web Optimization, Web Ranking & SEO",
          "Hosting & Domain Setup for 1 year",
          "Limit of Total 5 Pages as per Customer Requirements",
        ],
      },
      {
        title: "Enterprise",
        titleColor: "#E06D47",
        description:
          "Enterprises, agencies, or complex projects requiring scalable, tailored solutions",
        price: "1899",
        features: [
          "Custom WordPress theme installation",
          "Mobile-responsive design",
          "All Premium pages +",
          "Custom post types (e.g., events, case studies)",
          "Membership portals with restricted content",
          "Landing pages for campaigns",
          "Fully custom theme development (from scratch)",
          "API integrations (CRM, ERP, Zapier)",
          "Advanced security (malware scanning, daily backups)",
          "Core Web Vitals optimization (90+ scores)",
          "7 Rounds of Revisions & 30 Days Support",
          "Custom Services/Portfolio (up to 15 items)",
          "FAQ / Testimonials",
          "HomePage / About us / Contact Page / Pricing Page",
          "Clean, modern & visually appealing layout Elements",
          "Advanced Blog (categories, tags, search)",
          "Custom theme design (tailored to brand guidelines)",
          "Advanced SEO (keyword research, schema markup)",
          "Performance optimization (caching, image compression)",
          "3rd-party plugin integrations (e.g., Mailchimp, Calendly)",
          "Limit of Total 10 Pages as per Customer Requirements",
          "Seamless Cross-Browser & Cross-Platform Compatibility",
          "Hosting & Domain Setup for 1 year",
          "Advanced E-Commerce Setup & Integration",
          "Includes Web Optimization, Web Ranking & SEO",
        ],
      },
    ],
    []
  );

  return (
    <section className={styles.Main} aria-labelledby="wordpress-heading">
      <div className={styles.ContentWrapper}>
        <div className={styles.Container}>
          <h2 className={styles.heading}>
            Holistic WordPress Development Offerings
          </h2>
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

export default memo(Wordpress);
