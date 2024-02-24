import React from "react";
import BlogCard from "./BlogCard";
import BlogCard2 from "./BlogCard2";
import styles from "../../../style/components/home/blogRow.module.css";
import Title from "../../common/Title";
import { blogRowData } from "../../../data/data";
function BlogRow() {
  const components = blogRowData.map((value, index) => {
    return <BlogCard key={index} src={value.src} desc={value.desc} />;
  });
  return (
    <div>
      <Title title="BLOG UPDATES" desc="CHOOSE BEST WITH OUR FAVORITE BRANDS" />
      <div className={styles.blogMainContainer}>
        <div className={styles.blogContainer1}>
          <BlogCard2 />
        </div>
        <div className={styles.blogContainer2}>{components}</div>
      </div>
    </div>
  );
}

export default BlogRow;
