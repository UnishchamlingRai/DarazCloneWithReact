import React from "react";
import styles from "./CartsContainer.module.css";

import { useCarts } from "../../../contexts/cartsContext";
import CartItem from "../cartItems/CartItem";
import CartsOrderSummary from "../CartsOrderSummary/CartsOrderSummary";

const Carts = () => {
 const {carts}=useCarts()
  
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartItems}>
        {carts.map((item) => (
         <CartItem item={item} key={item.id}/>
        ))}
      </div>
      <CartsOrderSummary carts={carts}/>
    </div>
  );
};

export default Carts;
