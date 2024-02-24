import React from "react";
import ShoppingCard from "./ShoppingCard";
import Title from "../../common/Title";
import styles from "../../../style/components/home/shoppingRow.module.css";
import { shoppingRowData } from "../../../data/data";
function ShoppingRow() {
  const components = shoppingRowData.map((value, index) => {
    return (
      <ShoppingCard
        key={index}
        src={value.src}
        title={value.title}
        price={value.price}
        dsc={value.desc}
      />
    );
  });
  return (
    <div>
      <Title title="THIS IS D-SHINE" desc="SHOP OVER OUR BEST BRANDS" />
      <div className={styles.shoppingContainer}>{components}</div>
    </div>
  );
}

export default ShoppingRow;
