import React, { useEffect } from "react";
import styles from "../style";
import Avatar from "@mui/material/Avatar";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { green } from "@mui/material/colors";
import FaceIcon from "@mui/icons-material/Face";
import AOS from "aos";
import "aos/dist/aos.css";

const Border2 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="4000">
      <div
        className={`${styles.flexCenter} flex flex-row rounded-tr-full rounded-b-full box-border h-[50px] w-[160px] p-3 m-[200px] bg-white
     xs:absolute hidden -bottom-5 right-1/2 translate-x-1/2 -translate-y-64`}>
        <Avatar
          sx={{
            bgcolor: green[500],
            width: "30px",
            height: "30px",
            margin: "3px",
          }}>
          <FaceIcon />
        </Avatar>
        <PlayArrowIcon sx={{ width: "30px", height: "30px" }} />
        <HorizontalRuleIcon sx={{ width: "30px", height: "30px" }} />
        <h3 className="font-bold text-md m-1">0:16</h3>
      </div>
    </div>
  );
};

export default Border2;
