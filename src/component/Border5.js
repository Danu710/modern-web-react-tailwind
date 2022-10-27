import React, { useEffect } from "react";
import styles from "../style";
import Avatar from "@mui/material/Avatar";
import FaceIcon from "@mui/icons-material/Face";
import AOS from "aos";

const Border5 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="4000">
      <div
        className={`${styles.flexCenter} flex flex-row rounded-tr-full rounded-b-full box-border h-[50px] w-[160px] p-3 m-[200px] bg-secondary
       absolute xs:-bottom-5 -bottom-10 xs:right-1/2 right-1/2 xs:-translate-x-24 -translate-x-5 xs:-translate-y-30 -translate-y-1`}>
        <Avatar
          sx={{
            width: "30px",
            height: "30px",
            margin: "3px",
          }}
          style={{ color: "#FFFF" }}>
          <FaceIcon />
        </Avatar>
        <h3 className="font-bold text-md m-1 text-white">I'm Here</h3>
      </div>
    </div>
  );
};

export default Border5;
