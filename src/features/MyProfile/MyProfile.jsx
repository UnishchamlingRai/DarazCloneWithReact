import React from 'react';
import styles from './MyProfile.module.css';
import { Link } from 'react-router-dom';

const MyProfile = () => {
  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.title}>Manage My Account</h2>
      <div className={styles.profileSections}>
        <div className={styles.personalProfile}>
          <h3 className={styles.sectionTitle}>Personal Profile</h3>
          <p className={styles.editLink}>EDIT</p>
          <p>Kirant Unish</p>
          <p>kirantunish@gmail.com</p>
          <Link to="#" className={styles.newsletterLink}>Subscribe to our Newsletter</Link>
        </div>
        <div className={styles.addressBook}>
          <h3 className={styles.sectionTitle}>Address Book</h3>
          <p className={styles.addLink}>Add</p>
          <p>Save your shipping address here.</p>
        </div>
      </div>
      <div className={styles.recentOrders}>
        <h3 className={styles.sectionTitle}>Recent Orders</h3>
        <table className={styles.ordersTable}>
          <thead>
            <tr>
              <th>Order #</th>
              <th>Placed On</th>
              <th>Items</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>201984355027320</td>
              <td>29/12/2020</td>
              <td><img src="path-to-your-image.jpg" alt="Product" className={styles.productImage} /></td>
              <td>Rs. 99</td>
              <td><Link to="#" className={styles.manageLink}>MANAGE</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
