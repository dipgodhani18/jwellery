import React from "react";
import styles from "../../style/components/home/brandRow.module.css";
import Title from "../common/Title";
function BrandRow() {
  return (
    <div>
      <Title title="OUR BRANDS" desc="CHOOSE BEST WITH OUR FAVORITE BRANDS" />
      <div className={styles.brandContainer}>
        <span>Jewellery</span>
        <span>Jewellery</span>
        <span>Jewellery</span>
        <span>Jewellery</span>
        <span>Jewellery</span>
        <span>Jewellery</span>
      </div>
    </div>
  );
}

export default BrandRow;
