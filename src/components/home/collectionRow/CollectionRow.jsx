import React from "react";
import CollectionCard from "./CollectionCard";
import Title from "../../common/Title";

import styles from "../../../style/components/home/collectionRow.module.css";

function CollectionRow() {
  const data = [
    {
      src: "/images/1.png",
      title: "Cushion",
      desc: "Bar Set Anniversary Ring.",
    },
    {
      src: "/images/2.png",
      title: "Ovel",
      desc: "Bar Set Anniversary Ring.",
    },
    {
      src: "/images/3.png",
      title: "Radiant",
      desc: "Bar Set Anniversary Ring.",
    },
    {
      src: "/images/4.png",
      title: "Pear",
      desc: "Bar Set Anniversary Ring.",
    },
    {
      src: "/images/1.png",
      title: "Cushion",
      desc: "Bar Set Anniversary Ring.",
    },
    {
      src: "/images/2.png",
      title: "Ovel",
      desc: "Bar Set Anniversary Ring.",
    },
    {
      src: "/images/3.png",
      title: "Radiant",
      desc: "Bar Set Anniversary Ring.",
    },
    {
      src: "/images/4.png",
      title: "Pear",
      desc: "Bar Set Anniversary Ring.",
    },
  ];

  const components = data.map((value, index) => {
    return (
      <CollectionCard
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
        title="NEW ARRIVELS"
        desc="KNOW MORE ABOUT OUR LATEST COLLECTION"
      />
      <div className={styles.mainCollectionContainer}>{components}</div>
    </div>
  );
}

export default CollectionRow;
