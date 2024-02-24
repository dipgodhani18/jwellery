import React from "react";
import styles from "../../style/layout/footer.module.css";

function FooterCard(props) {
  return (
    <div className={styles.footerCard}>
      <div className={styles.imageContainer}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.contentContainer}>
        <p>{props.title}</p>
        <span>{props.desc}</span>
      </div>
    </div>
  );
}

export default FooterCard;
