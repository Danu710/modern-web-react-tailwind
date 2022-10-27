import React, { useEffect } from "react";
import styles from "../style";
import AOS from "aos";
import "aos/dist/aos.css";

const Cta = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      className={` ${styles.flexCenter} ${styles.padding} ${styles.paddingY} flex flex-row bg-gradient-to-r from-purple-500 to-pink-500 " `}>
      <div
        className={` md:flex-row flex flex-col align-center items-center gap-10  m-2 `}>
        <div data-aos="zoom-out-up" className="px-8">
          <h2 className={`${styles.heading2} text-center`}>3M</h2>
          <p className={styles.paragraph}>Active users</p>
        </div>

        <div data-aos="zoom-out-up" className="px-8">
          <h2 className={`${styles.heading2} text-center`}>1B+</h2>
          <p className={styles.paragraph}>Encrypted messages</p>
        </div>

        <div data-aos="zoom-out-up" className="px-8">
          <h2 className={`${styles.heading2} text-center`}>4.3x</h2>
          <p className={styles.paragraph}>Faster than before</p>
        </div>
      </div>
    </section>
  );
};

export default Cta;
