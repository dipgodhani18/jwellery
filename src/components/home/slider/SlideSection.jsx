import React from "react";
import styles from "../../../style/components/home/slideSection.module.css";
function SlideSection(props) {
  return (
    <div className={styles.sliderSection}>
      <img src={props.src} alt={props.alt} />
      <div className={styles.contentSection}>
        <div className={styles.contentParaSection}>
          <h3>{props.title1}</h3>
          <h2>{props.title2}</h2>

          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default SlideSection;
