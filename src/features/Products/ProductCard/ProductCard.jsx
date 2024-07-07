import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import CommonRatingStar from "../../../UI/CommonRatingStar/CommonRatingStar";

function ProductCard({ product }) {
  const { thumbnail, title, rating, price, discountPercentage, id } = product;
  const afterDiscountPrice = price - (price * discountPercentage) / 100;
 
  // https://dummyjson.com/products?limit=10&skip=10&select=price,description,discountPercentage,rating,thumbnail
  return (
    <Link to={`products/${id}`} className={styles.productLink}>
      <div className={styles.productCard}>
        <img src={thumbnail} alt={title} className={styles.productImage} />
        <div className={styles.content}>
          <p className={styles.description}>{title}</p>

          <div>
            <div className={styles.discountPrice}>
              ${afterDiscountPrice.toFixed(2)}
            </div>
            <div className={styles.prices}>
              <span className={styles.price}>${price.toFixed(2)}</span>
              <span className={styles}>-{discountPercentage}%</span>
            </div>
          </div>
          <CommonRatingStar rating={rating} />
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
