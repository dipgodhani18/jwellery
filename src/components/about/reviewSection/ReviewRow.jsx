import React from "react";
import ReviewCard from "./ReviewCard";
import styles from "../../../style/components/about/reviewSection.module.css";
import Title from "../../common/Title";
import { reviewSectionData } from "../../../data/data";

function ReviewRow() {
  return (
    <div>
      <Title
        title="SOME WORDS FROM OUR CUSTOMERS"
        desc="WE SATISFIED MORE THAN 700 CUSTOMERS"
      />
      <div className={styles.reviewMainContainer}>
        {reviewSectionData.map((value, index) => {
          return (
            <ReviewCard
              key={index}
              src={value.src}
              title={value.title}
              desc={value.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ReviewRow;
