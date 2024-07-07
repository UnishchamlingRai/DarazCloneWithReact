import React from 'react';
import styles from './CartsOrderSummary.module.css';

const CartsOrderSummary = ({carts}) => {
    // const total = {
    //     subtotal: "Rs. 72,596",
    //     shippingFee: "Rs. 395",
    //     shippingDiscount: "-Rs. 310",
    //     total: "Rs. 72,681",
    //   };
    const selectedCarts=carts.filter((item)=>item.selected)
    const subtotal=selectedCarts.reduce((acc,item)=>acc+item.discountedPrice*item.quantity,0)
    const shippingFee=selectedCarts.reduce((acc,item)=>acc+5*item.quantity,0)
    const shippingDiscount=shippingFee-(50*shippingFee/100)
    const itemsCount=selectedCarts.reduce((acc,item)=>acc+item.quantity,0)
    const total=subtotal+shippingFee-shippingDiscount
    
    
    
    return (
        <div className={styles.orderSummary}>
        <h3>Order Summary</h3>
        <div className={styles.summaryItem}>
          <span>Subtotal ({itemsCount} items)</span>
          <span>$ {subtotal.toFixed(0)}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Shipping Fee</span>
          <span>$ {shippingFee}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Shipping Fee Discount</span>
          <span>{shippingDiscount}</span>
        </div>
        <div className={styles.voucher}>
          <input type="text" placeholder="Enter Voucher Code" />
          <button>Apply</button>
        </div>
        <div className={styles.total}>
          <span>Total</span>
          <strong>$ {total.toFixed(0)}</strong>
        </div>
        <button className={styles.checkoutButton}>Proceed to Checkout</button>
      </div>
    );
}

export default CartsOrderSummary;
