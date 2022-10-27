import React, { useEffect } from "react";
import styles from "../style";
import phonewa from "../img/phonewa.png";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
import Border1 from "./Border1";
import Border2 from "./Border2";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      data-aos="fade-up"
      id="home"
      className={` ${styles.paddingY}  bg-purple-gradient`}>
      <div
        className={`${styles.flexCenter} flex flex-col  sm:min-w-[192px] min-w-[120px] m-2 relative`}>
        <h1
          className={` "font-poppins font-bold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[50.5px] ,`}>
          Stay close to your{" "}
          <span className="flex flex-wrap justify-center text-secondary">
            favorite people.
          </span>
        </h1>
        <p
          className={`${styles.paragraph} xs:max-w-[500px] text-center max-w-[500px] mt-3 `}>
          Instant messaging across all your devices.
        </p>
        <Button />

        {/* <div class="static circle rounded-full w-[450px] h-[450px] bg-gradient-to-b from-violet-500 to-fuchsia-500 filter blur-xl" /> */}
        <img
          src={phonewa}
          alt="iphone"
          className="mt-5  xs:w-[250px] w-[250px]"
        />
        <Border1 />
        <Border2 />
      </div>
    </section>
  );
};

export default Hero;
