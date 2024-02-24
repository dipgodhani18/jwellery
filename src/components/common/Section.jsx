import React from "react";
import styles from "../../style/components/common/section.module.css";
function Section(props) {
  return (
    <div className={styles.sectionContainer}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Section;
