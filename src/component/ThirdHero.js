import React, { useEffect } from "react";
import styles from "../style";
import boy from "../img/boy.png";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import AOS from "aos";
import "aos/dist/aos.css";

const ThirdHero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className={`${styles.paddingY}`}>
      <div
        className={`${styles.flexCenter} xs:flex-row flex flex-col sm:min-w-[192px] min-w-[120px] m-2`}>
        <div
          data-aos="fade-up"
          className={`${styles.flexSection} xs:flex-col flex flex-wrap`}>
          <RadioButtonCheckedIcon
            sx={{ width: "30px", height: "30px" }}
            style={{ color: "#A873E8" }}
          />
          <h1
            className={`"font-poppins font-bold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[50.5px] `}>
            Create <span className="xs:flex-wrap">and share</span>{" "}
          </h1>
          <p
            className={`${styles.paragraph} xs:max-w-[500px]  max-w-[500px] mt-3`}>
            Easily create fun, entertaining{" "}
            <span className="xs:flex-wrap">videos to share with friends</span>
          </p>
        </div>
        <div data-aos="zoom-in-up" className={`${styles.flexCenter} mt-8`}>
          <img src={boy} alt="girl" className="w-[500px] h-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default ThirdHero;
