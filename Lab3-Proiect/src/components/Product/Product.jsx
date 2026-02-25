import React from "react";
import styles from "./Product.module.css";

const Product = ({ product, onAddToCart }) => {
  const { id, name, image, rating, priceCents } = product;

  return (
    <div className={styles.productContainer}>
      <div className={styles.productImageContainer}>
        <img
          className={styles.productImage}
          src={image}
          alt={name}
        />
      </div>

      <div className={`${styles.productName} limit-text-to-2-lines`}>
        {name}
      </div>

      <div className={styles.productRatingContainer}>
        <img
          className={styles.productRatingStars}
          src={`/images/ratings/rating-${rating.stars * 10}.png`}
          alt="rating"
        />
        <div className={styles.productRatingCount}>
          {rating.count}
        </div>
      </div>

      <div className={styles.productPrice}>
        ${(priceCents / 100).toFixed(2)}
      </div>

      <div className={styles.productSpacer}></div>

      <div className={`${styles.addedToCart} js-added-to-cart-${id}`}>
        <img src="/images/icons/checkmark.png" alt="checkmark" />
        Added
      </div>

      <button
        className={styles.addToCartButton}
        onClick={() => onAddToCart(id)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;