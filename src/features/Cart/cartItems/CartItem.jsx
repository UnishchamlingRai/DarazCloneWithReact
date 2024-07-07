import React from 'react';
import styles from './CartItem.module.css';
import Button from '../../../UI/Button/Button';
import { useCarts } from '../../../contexts/cartsContext';
import { TrashIcon  } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
const CartItem = ({item}) => {
  const {dispatch}=useCarts()
    return (
      
       <div key={item.id} className={styles.cartItem}>
        <input type="checkbox" checked={item.selected} onChange={() => dispatch({type:"carts/selectedtoggleItem",payload:item.id})}/>
        <Link to={`/products/${item.id}`} className={styles.cartItemLink}>
        <img
          src={item.image}
          alt={item.name}
          className={styles.cartItemImage}
        />
        </Link>
       
  <Link to={`/products/${item.id}`} className={styles.cartItemLink}>
        <div className={styles.cartItemDetails}>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </div>
        </Link>

        <div className={styles.cartItemPrice}>
        <span className={styles.discountedPrice}>
              {item.discountedPrice.toFixed(2)}
            </span>
            <span className={styles.price}>{item.price}</span>
            <span className={styles.discountPercentage}>-{item.discountPercentage}%</span>
           
            <button className={styles.delete} onClick={() => dispatch({type:"carts/removeItem",payload:item.id})}>
              <TrashIcon className='no-border'  width={20} height={20} />
            </button>
          </div>

        <div className={styles.quantityControls}>
            <Button disable={item.quantity===1} onClick={() => dispatch({type:"carts/decreaseQuantity",payload:item.id})}>-</Button>
            <span>{item.quantity}</span>
            <Button disable={item.quantity===item.stock}  onClick={() => dispatch({type:"carts/increaseQuantity",payload:item.id})} >+</Button>
          </div>
      </div>
       
    );
}

export default CartItem;
