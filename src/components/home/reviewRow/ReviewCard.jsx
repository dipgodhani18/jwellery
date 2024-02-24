import React from "react";
import styles from "../../../style/components/home/reviewRow.module.css";

function ReviewCard(props) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewImage}>
        <img src={props.src} alt={props.title} />
        <span>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-half"></i>
        </span>
      </div>
      <div className={styles.content}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
