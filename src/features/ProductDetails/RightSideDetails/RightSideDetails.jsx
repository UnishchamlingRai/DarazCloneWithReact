import { useState } from "react";
import Button from "../../../UI/Button/Button";
import styles from "./RightSide.module.css";
function RightSideDetails({ product }) {
  const [quantity, setQuantity] = useState(1);
  const {
    rating,
    reviews,
    description,
    price,
    returnPolicy,
    minimumOrderQuantity,
    tags,
    stock,
    discountPercentage,
    category,
    brand,
    availabilityStatus,
    title,
  } = product;
  const afterDiscountPrice = price - (price * discountPercentage) / 100;

  console.log(stock, availabilityStatus);
  return (
    <div className={styles.details}>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.ratingsInfo}>
          <div className={styles.rating}>
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={
                  index < rating ? styles.starFilled : styles.starEmpty
                }
              >
                ★
              </span>
            ))}
          </div>
          <p>{reviews.length} Ratings</p>
        </div>
        <div className={styles.brand}>
          <span>
            <i>Brand:</i>
            {brand} |
          </span>
          <span>{returnPolicy}</span>
        </div>
      </div>

      <div className={styles.addtoCarts}>
        <div className={styles.prices}>
          <h2>${afterDiscountPrice.toFixed(2)}</h2>
          <div>
            <span>${price}</span>
            <p>-{discountPercentage}%</p>
          </div>
        </div>
        <div className={styles.cartsOperation}>
          <div className={styles.quantity}>
            <span>Quantity:</span>
            <div>
              <Button
                bgcolor={"gray"}
                onClick={() => setQuantity((quantity) => quantity - 1)}
                disable={quantity <= 1}
              >
                -
              </Button>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <Button
                bgcolor={"gray"}
                onClick={() => setQuantity((quantity) => quantity + 1)}
                disable={quantity >= stock}
              >
                +
              </Button>
            </div>
          </div>
          <div className={styles.buyNow}>
            <Button variant="primary" size="large">
              Buy Now
            </Button>
            <Button variant="primary" size="large" bgcolor={"orange"}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.description}>
        <h3>Descripton:</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default RightSideDetails;
