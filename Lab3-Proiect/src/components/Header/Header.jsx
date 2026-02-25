import React from "react";
import styles from "./Header.module.css";

const Header = ({ cartQuantity = 0, onNavigate }) => {
  return (
    <div className={styles.amazonHeader}>
      <div className={styles.amazonHeaderLeftSection}>
        <a
          href="#"
          className={styles.headerLink}
          onClick={() => onNavigate && onNavigate("home")}
        >
          <img
            className={styles.amazonLogo}
            src="/images/amazon-logo-white.png"
            alt="Amazon Logo"
          />
          <img
            className={styles.amazonMobileLogo}
            src="/images/amazon-mobile-logo-white.png"
            alt="Amazon Mobile Logo"
          />
        </a>
      </div>

      <div className={styles.amazonHeaderMiddleSection}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search"
        />

        <button className={styles.searchButton}>
          <img
            className={styles.searchIcon}
            src="/images/icons/search-icon.png"
            alt="Search"
          />
        </button>
      </div>

      <div className={styles.amazonHeaderRightSection}>
        <a
          href="#"
          className={`${styles.ordersLink} ${styles.headerLink}`}
          onClick={() => onNavigate && onNavigate("orders")}
        >
          <span className={styles.returnsText}>Returns</span>
          <span className={styles.ordersText}>& Orders</span>
        </a>

        <a
          href="#"
          className={`${styles.cartLink} ${styles.headerLink}`}
          onClick={() => onNavigate && onNavigate("checkout")}
        >
          <img
            className={styles.cartIcon}
            src="/images/icons/cart-icon.png"
            alt="Cart"
          />
          <div className={styles.cartQuantity}>{cartQuantity}</div>
          <div className={styles.cartText}>Cart</div>
        </a>
      </div>
    </div>
  );
};

export default Header;