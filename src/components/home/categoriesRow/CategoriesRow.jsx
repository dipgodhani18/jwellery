import React from "react";
import Title from "../../common/Title";
import CategoriesCard from "./CategoriesCard";
import styles from "../../../style/components/home/categoriesRow.module.css";
import { categoriesRowData } from "../../../data/data";

function CategoriesRow() {
  const components = categoriesRowData.map((value, index) => {
    return (
      <CategoriesCard
        key={index}
        src={value.src}
        title={value.title}
        desc={value.desc}
      />
    );
  });
  return (
    <div>
      <Title
        title="OUR FEATURED CATEGORIES"
        desc="MAKE EASY SHOP WITH OUR CATEGORIES"
      />
      <div className={styles.categoriesCardContainer}>{components}</div>
    </div>
  );
}

export default CategoriesRow;
