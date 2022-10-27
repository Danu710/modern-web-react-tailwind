import React, { useEffect } from "react";
import styles from "../style";
import Button from "./Button";
import boywith from "../img/boywith.png";
import girlwith from "../img/girlwith.png";
import AOS from "aos";
import "aos/dist/aos.css";

const EndHero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className={`sm:flex-wrap ${styles.paddingY}`}>
      <div
        className={`${styles.flexStart} xs:flex-col flex-col sm:min-w-[192px] min-w-[120px] m-2`}>
        <h1 className="font-poppins font-bold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[50.5px]">
          Say what's on your mind{" "}
        </h1>
        <p
          className={`${styles.paragraph} xs:max-w-[500px] max-w-[500px] mt-3`}>
          Share your everyday moments in limitless ways.
        </p>
        <Button />
      </div>
      <div
        className={`${styles.flexCenter} xs:flex-row flex-col sm:min-w-[192px] min-w-[120px] m-2`}>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-row">
          <img src={boywith} alt="girl" className="w-[500px] h-[500px]" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex flex-row">
          <img src={girlwith} alt="girl" className="w-[500px] h-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default EndHero;
