import React from "react";
import styles from "../style";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CaseStudiesComponent from "../component/CaseStudiesComponent";
import CaseStudiesCard from "../component/CaseStudiesCard";

const CaseStudies = () => {
  return (
    <div className="bg-section w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-section  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <CaseStudiesComponent />
          {/* <CaseStudiesCard /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
