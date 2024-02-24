import React from "react";
import styles from "../style/layout/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className={styles.navContainer}>
        <div>
          <h1>D-SHINE</h1>
        </div>
        <div className={styles.searchBar}>
          <input type="search" placeholder="Search your products" />
          <i className="bi bi-search"></i>
        </div>
      </div>
      <div className={styles.listContainer}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/necklace">NECKLACES</Link>
          </li>
          <li>
            <Link to="/blogs">BLOGS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
        <button>
          <i className="bi bi-gift"></i>
          OFFERS
        </button>
      </div>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <input type="search" placeholder="Search your products" />
          <i className="bi bi-search"></i>
        </div>
        <div className={styles.listIcon}>
          <i className="bi bi-list"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
