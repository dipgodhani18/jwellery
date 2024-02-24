import React from "react";
import styles from "../../../style/components/necklace/necklace.module.css";
import { necklaceData } from "../../../data/data";
import NecklaceCard from "./NecklaceCard";
function NecklaceRow() {
  const components = necklaceData.map((value, index) => {
    return (
      <NecklaceCard
        key={index}
        src={value.src}
        title={value.title}
        price={value.price}
        desc={value.desc}
      />
    );
  });
  return <div className={styles.necklaceMainCard}>{components}</div>;
}

export default NecklaceRow;
