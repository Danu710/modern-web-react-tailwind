import React, { useEffect } from "react";
import styles from "../style";
import Button from "./Button";
import { socialMedia } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} bg-secondary`}>
      <div
        data-aos="fade-up"
        data-aos-duration="5000"
        className={`${styles.flexCenter} md:flex-col flex flex-col w-full`}>
        <div
          className={`${styles.flexCenter} flex flex-col sm:min-w-[192px] min-w-[120px] m-2 `}>
          <h1 className="font-poppins font-bold xs:text-[48px] text-[40px] text-white text-center xs:leading-[76.8px] leading-[50.5px]">
            Express yourself, even when you're apart.
          </h1>
          <p
            className={`${styles.paragraph} xs:max-w-[500px] text-center max-w-[500px] mt-3 `}>
            Your chats — your way.
          </p>
          <Button className="border-b border-gray-100 mb-8 " />
        </div>
        {/* <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
      </div> */}

        <div
          className={`${styles.flexCenter} flex flex-row xs:mt-0 mt-6 border-t-2 w-[80%] border-gray-50 pt-8`}>
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>

        <div
          className={`${styles.flexCenter} flex flex-row  sm:min-w-[192px] min-w-[120px] m-2 border-t-[#000000] mt-8 `}>
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white px-3">
            Features
          </p>
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
            Updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
