import React from "react";
import Title from "../../common/Title";
import FeatureCard from "./FeatureCard";
import styles from "../../../style/components/home/featureRow.module.css";
import { featuresRowData } from "../../../data/data";
function FeatureRow() {
  const components = featuresRowData.map((value, index) => {
    return <FeatureCard key={index} src={value.src} title={value.title} />;
  });
  return (
    <div>
      <Title
        title="FEATURED PRODUCTS"
        desc="KNOW MORE ABOUT OUR LATEST COLLECTION"
      />
      <div className={styles.featureCardContainer}>{components}</div>
    </div>
  );
}

export default FeatureRow;
