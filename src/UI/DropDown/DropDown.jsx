import React, {  useState } from 'react';
import { HiArrowNarrowDown } from "react-icons/hi";
import styles from './DropDown.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dropdown = ({userName,userImg,onHandelLogOut}) => {
    const [isOpen, setIsOpen] = useState(false);
    // const ref=useRef(null)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
  
    // useEffect(function(){
        

    //     function handleClickOutside(event) {
    //         if (ref.current && !ref.current.contains(event.target)) {
    //             setIsOpen(false);
                
    //         }
    //     }
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };


    // },[ref])

    return (
        <div className={styles.dropdownContainer}>
            <div className={styles.account} onClick={toggleDropdown} >
                {userImg?<img src={userImg} alt={userName} height={40} width={40}/>:<FaUserCircle size={24} />}
                <div>
                <span>Hello, {userName}</span>
                <strong>Order & Account</strong>
               
                </div>
                <HiArrowNarrowDown />
            </div>
            {isOpen && (
                <div className={styles.dropdownMenu}>
                    <Link to="/myprofile" className={styles.menuItem}>Manage My Account</Link>
                    <div className={styles.menuItem}>My Orders</div>
                    <div className={styles.menuItem}>My Wishlist & Followed Stores</div>
                    <div className={styles.menuItem}>My Reviews</div>
                    <div className={styles.menuItem}>My Returns & Cancellations</div>
                    <div className={styles.menuItem} onClick={onHandelLogOut}>Logout</div>
                   
                </div>
            )}
        </div>
    );
};

export default Dropdown;
