import React from "react";
import styles from "../../../style/components/home/blogRow.module.css";

function BlogCard2() {
  return (
    <div className={styles.blogCard2}>
      <div className={styles.imageContainer}>
        <img src="/images/32.png" alt="blog" />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          eligendi tempora neque deserunt fugiat facilis!
        </p>
      </div>
    </div>
  );
}

export default BlogCard2;
