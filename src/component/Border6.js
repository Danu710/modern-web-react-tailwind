import React, { useEffect } from "react";
import styles from "../style";
import maps from "../img/maps.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Border6 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="4000"
      className={`${styles.flexCenter} absolute xs:-bottom-5 xs:right-1/2 right-0 xs:-translate-x-24 -translate-x-1/2 xs:-translate-y-30 -translate-y-1/2`}>
      <img src={maps} alt="maps" className="w-[150px] rounded-xl " />
    </div>
  );
};

export default Border6;
