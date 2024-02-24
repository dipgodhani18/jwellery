import React from "react";
import HeroCard from "./HeroCard";
import { heroSectionData } from "../../../data/data";
function HeroRow() {
  return (
    <>
      <div>
        {heroSectionData.map((value, index) => {
          return (
            <HeroCard
              key={index}
              src={value.src}
              title={value.title}
              desc1={value.desc1}
              desc2={value.desc2}
              desc3={value.desc3}
            />
          );
        })}
      </div>
    </>
  );
}

export default HeroRow;
