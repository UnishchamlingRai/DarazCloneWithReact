import React from "react";
import styles from "./CartsContainer.module.css";
import Button from "../../UI/Button/Button";

const Carts = () => {
  const items = [
    {
      id: 1,
      name: "Black Ankle Cut Printed Bandana Synthetic Round Toe Lace-Up Closure Medium Width Casual/Sport",
      description: "No Brand, Size:EU:39, Color Family:Black",
      price: "Rs. 2,275",
      discountedPrice: "Rs. 499",
      quantity: 1,
      selected: true,
      image: "path_to_image1",
    },
    {
      id: 2,
      name: "Shangrila Pack Of 4 Cotton T-Shirt For Men - Black | Navy | Grey | Maroon | Fashion | T-Shirt For Men",
      description: "Shangri-la, Size:Int:S, Color Family:Multicolor",
      price: "Rs. 1,400",
      discountedPrice: "Rs. 1,049",
      quantity: 2,
      selected: true,
      image: "path_to_image2",
    },
  ];
  const total = {
    subtotal: "Rs. 72,596",
    shippingFee: "Rs. 395",
    shippingDiscount: "-Rs. 310",
    total: "Rs. 72,681",
  };
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartItems}>
        {items.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <input type="checkbox" checked={item.selected} />
            <img
              src={item.image}
              alt={item.name}
              className={styles.cartItemImage}
            />
            <div className={styles.cartItemDetails}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <div className={styles.cartItemPrice}>
                <span className={styles.price}>{item.price}</span>
                <span className={styles.discountedPrice}>
                  {item.discountedPrice}
                </span>
              </div>
              <div className={styles.quantityControls}>
                <Button bgcolor={"gray"}>-</Button>
                <span>{item.quantity}</span>
                <Button bgcolor={"gray"}>+</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.orderSummary}>
        <h3>Order Summary</h3>
        <div className={styles.summaryItem}>
          <span>Subtotal ({items.length} items)</span>
          <span>{total.subtotal}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Shipping Fee</span>
          <span>{total.shippingFee}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Shipping Fee Discount</span>
          <span>{total.shippingDiscount}</span>
        </div>
        <div className={styles.voucher}>
          <input type="text" placeholder="Enter Voucher Code" />
          <button>Apply</button>
        </div>
        <div className={styles.total}>
          <span>Total</span>
          <span>{total.total}</span>
        </div>
        <button className={styles.checkoutButton}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Carts;
