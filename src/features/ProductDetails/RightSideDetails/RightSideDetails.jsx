import { useState } from "react";
import Button from "../../../UI/Button/Button";
import styles from "./RightSide.module.css";
import { useCarts } from "../../../contexts/cartsContext";
function RightSideDetails({ product }) {
  const [quantity, setQuantity] = useState(1);
  const {carts,dispatch}=useCarts()
  console.log(product);
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
    thumbnail,
    id
  } = product;
  const afterDiscountPrice = price - (price * discountPercentage) / 100;
  const isAddedToCart = carts.some((item) => item.id === id);

  function handelAddToCart() {
    const cartItem = {
      id: id,
      name: title,
      description: description,
      price: price,
      discountedPrice: afterDiscountPrice,
      quantity: quantity,
      selected: true,
      image: thumbnail,
      stock:stock,
      discountPercentage:discountPercentage
    }
    dispatch({type:"carts/add",payload:cartItem})

  }

  // console.log(stock, availabilityStatus);
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
                disable={quantity <= 1 || isAddedToCart}
              >
                -
              </Button>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                disabled={isAddedToCart}
               
              />
              <Button
                bgcolor={"gray"}
                onClick={() => setQuantity((quantity) => quantity + 1)}
                disable={quantity >= stock || isAddedToCart}
              >
                +
              </Button>
            </div>
          </div>
          <div className={styles.buyNow}>
            <Button variant="primary" size="large">
              Buy Now
            </Button>
            <Button onClick={handelAddToCart} disable={isAddedToCart} variant="primary" size="large" bgcolor={"orange"}>
              {isAddedToCart ? "Already Added To Cart" : "Add To Cart"}
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
