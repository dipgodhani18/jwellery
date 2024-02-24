import React from "react";
import FooterCard from "./footer/FooterCard";
import styles from "../style/layout/footer.module.css";
import FooterRow from "./footer/FooterRow";
function Footer() {
  const data = [
    {
      src: "/images/car.png",
      title: "FREE SHIPPING",
      desc: "INTERNATIONAL",
    },
    {
      src: "/images/phone.png",
      title: "24 HOURS HELPLINE",
      desc: "123 456 789",
    },
    {
      src: "/images/shopping.png",
      title: "SEE OUR",
      desc: "LATEST OFFERS",
    },
  ];

  const components = data.map((value, index) => {
    return (
      <FooterCard
        key={index}
        src={value.src}
        title={value.title}
        desc={value.desc}
      />
    );
  });
  return (
    <div className={styles.footerMainContainer}>
      <div className={styles.footerParaContainer}>
        <div className={styles.footerCardContainer}>{components}</div>
        <div className={styles.footerRowParaContainer}>
          <FooterRow />
        </div>
        <div className={styles.lastContent}>
          <p>© 2018 D-Shine All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
