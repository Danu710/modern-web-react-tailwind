import React, { useEffect } from "react";
import styles from "../style";
import AOS from "aos";

const Border4 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <div
        className={`${styles.flexCenter} flex flex-row rounded-tl-full rounded-tr-xl rounded-b-full box-border h-[50px] w-[160px] p-3 m-[200px] bg-white border-secondary border-4
                border-opacity-25
                absolute xs:-bottom-5 -bottom-5 xs:right-1/2  right-1/2 xs:translate-x-36 translate-x-52 xs:-translate-y-60 -translate-y-30`}>
        <div>🔥</div>
        <div>💖</div>
        <div>😮</div>
        <div>👍</div>
        <div>🤩</div>
      </div>
    </div>
  );
};

export default Border4;
