import React from "react";
import styles from "../../../style/components/home/featureRow.module.css";

function FeatureCard(props) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.cardImage}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h2>{props.title}</h2>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default FeatureCard;
