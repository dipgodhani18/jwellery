import React from "react";
import styles from "../../../style/components/about/reviewSection.module.css";
function ReviewCard(props) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.imageContainer}>
        <div className={styles.imageContent}>
          <img src={props.src} alt={props.title} />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
