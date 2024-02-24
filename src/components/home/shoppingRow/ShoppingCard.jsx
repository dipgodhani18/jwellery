import React from "react";
import styles from "../../../style/components/home/shoppingRow.module.css";

function ShoppingCard(props) {
  return (
    <div className={styles.shoppingCard}>
      <div className={styles.imageContainer}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h2>{props.title}</h2>
        <span>₹{props.price}</span>
        <p>{props.desc}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ShoppingCard;
