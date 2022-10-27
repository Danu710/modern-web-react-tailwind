import React from "react";
import styles from "../style";
import EndHero from "./EndHero";
import FourthHero from "./FourthHero";
import SecondHero from "./SecondHero";
import ThirdHero from "./ThirdHero";
import PublicIcon from "@mui/icons-material/Public";

const CaseStudiesComponent = () => {
  return (
    <section className={` ${styles.paddingY}`}>
      <div
        className={`${styles.flexCenter} flex flex-col sm:min-w-[192px] min-w-[120px] m-2 `}>
        <h1 className="font-poppins font-bold xs:text-[70px] text-[40px] text-black text-center xs:leading-[76.8px] leading-[50.5px]">
          Features
        </h1>
        <p
          className={`${styles.paragraph} xs:max-w-[500px] xs:text-[30px] text-[10px] text-black text-center max-w-[500px] mt-3 `}>
          Everything you need to feel closer to your favorite people.
        </p>
      </div>
      <div
        className={`${styles.flexStart} ${styles.paddingX} ${styles.paddingY} grid xs:grid-cols-2 grid-cols-1 xs:justify-items-center justify-items-center xs:gap-x-2 gap-x-2 xs:gap-y-2 gap-y-3 `}>
        <div className="relative block rounded-xl border border-gray-100 p-5 shadow-xl xs:w-[620px] w-[300px]">
          <SecondHero />
        </div>
        <div className="relative block rounded-xl border border-gray-100 p-5 shadow-xl xs:w-[620px] w-[300px]">
          <ThirdHero />
        </div>
        <div className="relative block rounded-xl border border-gray-100 p-5 shadow-xl xs:w-[620px] w-[300px]">
          <FourthHero />
        </div>
        <div className="relative block rounded-xl border border-gray-100 p-5 shadow-xl xs:w-[620px] w-[300px]">
          <EndHero />
        </div>
      </div>
      <div
        className={`${styles.flexStart} ${styles.paddingX} ${styles.paddingY} grid xs:grid-cols-4 grid-cols-2 xs:grid-rows-4 grid-rows-2 xs:justify-items-center justify-items-center  xs:gap-x-2 gap-x-8 xs:gap-y-5 gap-y-3 `}>
        <div className="relative rounded-xl border border-gray-100 p-8 xs:w-[250px] w-[180px] shadow-xl flex flex-col">
          <PublicIcon sx={{ width: "30px" }} />
          <h3 class="mt-4 text-xl font-bold text-gray-900">
            Science of Chemistry
          </h3>
          <p class="mt-2 hidden text-sm sm:block">
            You can manage phone, email and chat conversations all from a single
            mailbox.
          </p>
        </div>
        <div className="relative rounded-xl border border-gray-100 p-8 xs:w-[250px] w-[180px] shadow-xl flex flex-col">
          <PublicIcon sx={{ width: "30px" }} />
          <h3 class="mt-4 text-xl font-bold text-gray-900">
            Science of Chemistry
          </h3>
          <p class="mt-2 hidden text-sm sm:block">
            You can manage phone, email and chat conversations all from a single
            mailbox.
          </p>
        </div>
        <div className="relative rounded-xl border border-gray-100 p-8 xs:w-[250px] w-[180px] shadow-xl flex flex-col">
          <PublicIcon sx={{ width: "30px" }} />
          <h3 class="mt-4 text-xl font-bold text-gray-900">
            Science of Chemistry
          </h3>
          <p class="mt-2 hidden text-sm sm:block">
            You can manage phone, email and chat conversations all from a single
            mailbox.
          </p>
        </div>
        <div className="relative rounded-xl border border-gray-100 p-8 xs:w-[250px] w-[180px] shadow-xl flex flex-col">
          <PublicIcon sx={{ width: "30px" }} />
          <h3 class="mt-4 text-xl font-bold text-gray-900">
            Science of Chemistry
          </h3>
          <p class="mt-2 hidden text-sm sm:block">
            You can manage phone, email and chat conversations all from a single
            mailbox.
          </p>
        </div>
        <div className="relative rounded-xl border border-gray-100 p-8 xs:w-[250px] w-[180px] shadow-xl flex flex-col">
          <PublicIcon sx={{ width: "30px" }} />
          <h3 class="mt-4 text-xl font-bold text-gray-900">
            Science of Chemistry
          </h3>
          <p class="mt-2 hidden text-sm sm:block">
            You can manage phone, email and chat conversations all from a single
            mailbox.
          </p>
        </div>
        <div className="relative rounded-xl border border-gray-100 p-8 xs:w-[250px] w-[180px] shadow-xl flex flex-col">
          <PublicIcon sx={{ width: "30px" }} />
          <h3 class="mt-4 text-xl font-bold text-gray-900">
            Science of Chemistry
          </h3>
          <p class="mt-2 hidden text-sm sm:block">
            You can manage phone, email and chat conversations all from a single
            mailbox.
          </p>
        </div>
        <div className="relative rounded-xl border border-gray-100 p-8 xs:w-[250px] w-[180px] shadow-xl flex flex-col">
          <PublicIcon sx={{ width: "30px" }} />
          <h3 class="mt-4 text-xl font-bold text-gray-900">
            Science of Chemistry
          </h3>
          <p class="mt-2 hidden text-sm sm:block">
            You can manage phone, email and chat conversations all from a single
            mailbox.
          </p>
        </div>
        <div className="relative rounded-xl border border-gray-100 p-8 xs:w-[250px] w-[180px] shadow-xl flex flex-col">
          <PublicIcon sx={{ width: "30px" }} />
          <h3 class="mt-4 text-xl font-bold text-gray-900">
            Science of Chemistry
          </h3>
          <p class="mt-2 hidden text-sm sm:block">
            You can manage phone, email and chat conversations all from a single
            mailbox.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesComponent;
