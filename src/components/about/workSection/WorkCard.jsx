import React from "react";
import styles from "../../../style/components/about/workSection.module.css";
function WorkCard(props) {
  return (
    <div className={styles.workCard}>
      <div className={styles.cardContent}>
        <span>{props.count}</span>
        <h2>{props.title}</h2>
      </div>
      <div className={styles.cardDescription}>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default WorkCard;
