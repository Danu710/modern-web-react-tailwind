import React, { useEffect } from "react";
import styles from "../style";
import Avatar from "@mui/material/Avatar";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import FaceIcon from "@mui/icons-material/Face";
import AOS from "aos";
import "aos/dist/aos.css";

const Border3 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className={`${styles.flexCenter} flex flex-row rounded-tr-full rounded-b-full box-border xs:h-[50px] h-[50px] xs:w-[160px] w-[160px] p-3 m-[200px]
      absolute  -bottom-5 right-1/2 -translate-x-74 -translate-y-36 bg-secondary`}>
      <Avatar
        sx={{
          width: "30px",
          height: "30px",
          margin: "3px",
        }}
        style={{ color: "#000000" }}>
        <FaceIcon />
      </Avatar>
      <PlayArrowIcon
        sx={{ width: "30px", height: "30px" }}
        style={{ color: "#ffff" }}
      />
      <HorizontalRuleIcon
        sx={{ width: "30px", height: "30px" }}
        style={{ color: "#ffff" }}
      />
      <h3 className="font-bold text-md m-1 text-white">0:16</h3>
    </div>
  );
};

export default Border3;
