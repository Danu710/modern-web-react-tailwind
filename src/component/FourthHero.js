import React, { useEffect } from "react";
import styles from "../style";
import girllaptop from "../img/girllaptop.png";
import MapIcon from "@mui/icons-material/Map";
import AOS from "aos";
import "aos/dist/aos.css";
import Border5 from "./Border5";
import Border6 from "./Border6";

const FourthHero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className={`sm:flex-wrap ${styles.paddingY}`}>
      <div
        className={`${styles.flexCenter} xs:flex-row flex-col sm:min-w-[192px] min-w-[120px] m-2 relative`}>
        <div className="flex flex-row">
          <img src={girllaptop} alt="girl" className="w-[500px] h-[500px]" />
          <Border5 />
          <Border6 />
        </div>
        <div
          data-aos="fade-up"
          className={`${styles.section}  xs:flex-col flex flex-wrap`}>
          <MapIcon
            sx={{ width: "30px", height: "30px" }}
            style={{ color: "#A873E8" }}
          />
          <h1 className="font-poppins font-bold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[50.5px]">
            Share <span className=" xs:flex-wrap">live location</span>{" "}
          </h1>
          <p
            className={`${styles.paragraph} xs:max-w-[500px] max-w-[500px] mt-3`}>
            Share your real-time location{" "}
            <span className="xs:flex-wrap">with anyone.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FourthHero;
