import React from "react";
import Cta from "../component/Cta";
import EndHero from "../component/EndHero";
import Footer from "../component/Footer";
import FourthHero from "../component/FourthHero";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import SecondHero from "../component/SecondHero";
import ThirdHero from "../component/ThirdHero";
import styles from "../style";

const Home = () => {
  return (
    <div className="bg-section w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-section  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <SecondHero />
          <ThirdHero />
          <FourthHero />
          <Cta />
          <EndHero />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
