import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";
function ProductItem({ product }) {
  const { thumbnail, title, rating, price, discountPercentage, reviews, id } =
    product;
  const afterDiscountPrice = price - (price * discountPercentage) / 100;
  return (
    <Link to={`/products/${id}`} className={styles.productItem}>
      <img src={thumbnail} alt={product.thumbnail} />
      <p>{title}</p>
      <div className={styles.productInfo}>
        <span>
          ⭐ {rating}/5({reviews?.length})
        </span>
        <span className={styles.freeDelivery}>Free Delivery</span>
        <span>
          <span className={styles.afterDiscount}>
            ${afterDiscountPrice.toFixed(2)}
          </span>
          <span className={styles.price}> ${price}</span>
        </span>
      </div>
    </Link>
  );
}

export default ProductItem;
