import React from "react";
import TeamCard from "./TeamCard";
import styles from "../../../style/components/about/teamSection.module.css";
import Title from "../../common/Title";
import { teamSectionData } from "../../../data/data";
function TeamRow() {
  return (
    <div>
      <Title title="MEET OUR TEAM" />
      <div className={styles.teamMainContainer}>
        {teamSectionData.map((value, index) => {
          return (
            <TeamCard
              key={index}
              src={value.src}
              title={value.title}
              desc={value.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TeamRow;
