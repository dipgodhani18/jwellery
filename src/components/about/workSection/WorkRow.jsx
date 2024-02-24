import React from "react";
import WorkCard from "./WorkCard";
import Title from "../../common/Title";
import styles from "../../../style/components/about/workSection.module.css";
import { workSectionData } from "../../../data/data";
function WorkRow() {
  return (
    <>
      <div>
        <Title title="HOW WE WORK" />
        <div className={styles.workCardContainer}>
          {workSectionData.map((value, index) => {
            return (
              <WorkCard
                key={index}
                count={value.count}
                title={value.title}
                desc={value.desc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WorkRow;
