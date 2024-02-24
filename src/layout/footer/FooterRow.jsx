import React from "react";
import styles from "../../style/layout/footer.module.css";
function FooterRow() {
  return (
    <div className={styles.footerRowCard}>
      <div className={styles.content1}>
        <h3>ABOUT D-SHINE</h3>
        <p>
          We provide the best Quality of products to you.We are always here to
          help our lovely customers.
        </p>
        <ul>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-globe"></i>
          <i className="bi bi-google"></i>
        </ul>
      </div>
      <div className={styles.content2}>
        <h3>INFORMATION</h3>
        <ul>
          <li>About Us</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Top Brands</li>
        </ul>
      </div>
      <div className={styles.content2}>
        <h3>TOP BRANDS</h3>
        <ul>
          <li>Fusce iaculis</li>
          <li>Nisl dapibus</li>
          <li>Vulpulate sapien</li>
          <li>Aliquet</li>
          <li>Risus feugiat</li>
        </ul>
      </div>
      <div className={styles.content3}>
        <h3>SUBSCRIBE TO OUR LATEST NEWS</h3>
        <input type="email" />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
}

export default FooterRow;
