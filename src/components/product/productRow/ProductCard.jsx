import React from "react";
import styles from "../../../style/components/product/productRow.module.css";
function ProductCard(props) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.cardImage}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h2>{props.title}</h2>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
