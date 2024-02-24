import React from "react";
import styles from "../../../style/components/home/blogRow.module.css";

function BlogCard(props) {
  return (
    <div className={styles.blogCard}>
      <div className={styles.imageContainer}>
        <img src={props.src} alt="blog" />
      </div>
      <div>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default BlogCard;
