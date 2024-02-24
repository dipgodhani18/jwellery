import React from "react";
import styles from "../../../style/components/home/categoriesRow.module.css";
function CategoriesCard(props) {
  return (
    <div className={styles.categoriesCard}>
      <div className={styles.cardImage}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default CategoriesCard;
