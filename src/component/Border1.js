import React, { useEffect } from "react";
import styles from "../style";
import Avatar from "@mui/material/Avatar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { green } from "@mui/material/colors";
import AOS from "aos";
import "aos/dist/aos.css";

const Border1 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="000">
      <div
        className={`${styles.flexCenter}  flex flex-col rounded-b-xl rounded-tl-xl rounded-tr-md box-border xs:h-[200px] h-[200px] xs:w-[200px] w-[200px] p-4 px-8 bg-white
        hidden xs:absolute xs:-bottom-5  xs:left-1/2 xs:translate-x-1/2 xs:-translate-y-36`}>
        <Avatar sx={{ bgcolor: green[500], margin: "5px" }}>
          <AssignmentIcon />
        </Avatar>
        <h1 className="text-center font-normal text-lg">
          {" "}
          <span className="font-bold">$16.50</span> Request for breakfast
        </h1>
        <button
          type="button"
          className={`mt-3 w-[100px] h-[100px] p-3 font-poppins font-medium text-[18px] text-white bg-btn rounded-[10px] outline-none ${styles}`}>
          Pay
        </button>
      </div>
    </div>
  );
};

export default Border1;
