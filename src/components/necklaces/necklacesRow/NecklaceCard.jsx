import React from "react";
import styles from "../../../style/components/necklace/necklace.module.css";
function NecklaceCard(props) {
  return (
    <div className={styles.necklaceCard}>
      <div className={styles.cardImage}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h2>{props.title}</h2>
        <span>{props.price}₹</span>
        <p>{props.desc}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default NecklaceCard;
