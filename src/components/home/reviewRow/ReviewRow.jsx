import React from "react";
import ReviewCard from "./ReviewCard";
import Title from "../../common/Title";
import styles from "../../../style/components/home/reviewRow.module.css";
import { reviewRowData } from "../../../data/data";
function ReviewRow() {
  const components = reviewRowData.map((value, index) => {
    return (
      <ReviewCard
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
        title="SOME WORDS FROM OUR CUSTOMERS"
        desc="WE SATISFIED MORE THAN 700 CUSTOMERS"
      />
      <div className={styles.reviewCardContainer}>{components}</div>
    </div>
  );
}

export default ReviewRow;
