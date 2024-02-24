import React from "react";
import styles from "../../../style/components/product/productRow.module.css";
import { productData } from "../../../data/data";
import ProductCard from "./ProductCard";

function ProductRow() {
  const components = productData.map((value, index) => {
    return <ProductCard key={index} src={value.src} title={value.title} />;
  });
  return <div className={styles.featureCardContainer}>{components}</div>;
}

export default ProductRow;
