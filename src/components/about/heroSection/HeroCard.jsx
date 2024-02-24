import React from "react";
import styles from "../../../style/components/about/heroSection.module.css";

function HeroCard(props) {
  return (
    <div className={styles.heroCard}>
      <div className={styles.heroImage}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.heroContent}>
        <h2>{props.title}</h2>
        <p>{props.desc1}</p>
        <p>{props.desc2}</p>
        <p>{props.desc3}</p>
      </div>
    </div>
  );
}

export default HeroCard;
