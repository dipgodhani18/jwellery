import React from "react";
import styles from "../../../style/components/about/teamSection.module.css";
function TeamCard(props) {
  return (
    <div className={styles.teamCard}>
      <div className={styles.imageContainer}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.contentContainer}>
        <h2>{props.title}</h2>
        <span>{props.desc}</span>
        <ul>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-linkedin"></i>
          <i class="bi bi-google"></i>
        </ul>
      </div>
    </div>
  );
}

export default TeamCard;
