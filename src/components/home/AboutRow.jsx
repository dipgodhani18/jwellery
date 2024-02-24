import React from "react";
import styles from "../../style/components/home/aboutRow.module.css";
function AboutRow() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.imageContainer}>
        <img src="/images/6.png" alt="ring" />
      </div>
      <div className={styles.contentContainer}>
        <h3>About D-shine</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          pellentesque, diam viverra lacinia sodales, elit turpis consequat
          sapien, nec feugiat ex urna quis libero. Sed vel purus iaculis,
          lobortis neque vel, commodo enim. Quisque sollicitudin arcu
          ullamcorper libero consectetur commodo.lobortis neque vel, commodo
          enim!
        </p>
        <button>Start Shopping</button>
      </div>
    </div>
  );
}

export default AboutRow;
