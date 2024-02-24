import React from "react";
import styles from "../../../style/components/home/collectionRow.module.css";
function CollectionCard(props) {
  return (
    <div className={styles.collectionCard}>
      <div className={styles.imageContent}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default CollectionCard;
