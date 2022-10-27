import React, { useEffect } from "react";
import styles from "../style";
import Button from "./Button";
import girl from "../img/girl.png";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AOS from "aos";
import "aos/dist/aos.css";
import Border3 from "./Border3";
import Border4 from "./Border4";

const SecondHero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className={`sm:flex-wrap ${styles.paddingY}`}>
      <div
        className={`${styles.flexStart} flex flex-col sm:min-w-[192px] min-w-[120px] m-2 relative`}>
        <h1
          data-aos="fade-up"
          className="font-poppins font-bold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[50.5px]">
          Say what's on your mind{" "}
        </h1>
        <p
          className={`${styles.paragraph} xs:max-w-[500px] max-w-[500px] mt-3`}>
          Share your everyday moments in limitless ways.
        </p>
        <Button />
      </div>
      <div
        className={`${styles.flexCenter} xs:flex-row flex flex-col xs:min-w-[192px] min-w-[120px] m-2`}>
        <div className="flex flex-row">
          <img src={girl} alt="girl" className="w-[500px] h-[500px]" />
          <Border3 />
          <Border4 />
        </div>
        <div className={`${styles.section} mt-8`}>
          <EmojiEmotionsIcon
            sx={{ width: "30px", height: "30px" }}
            style={{ color: "#A873E8" }}
          />
          <h1 className={`${styles.heading1} md:text-4xl text-4xl`}>
            Express <span className="xs:flex-wrap">yourself freely</span>{" "}
          </h1>
          <p className={`${styles.paragraph}`}>
            Communicate with text, voice{" "}
            <span className="flex flex-wrap">
              message, video, emojis or annotations.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
