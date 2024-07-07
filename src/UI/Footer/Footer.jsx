import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4 className={styles.heading}>Customer Care</h4>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4 className={styles.heading}>Earn with Daraz</h4>
          <ul>
            <li>Daraz University</li>
            <li>Sell on Daraz</li>
            <li>Code of Conduct</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4 className={styles.heading}>Daraz</h4>
          <ul>
            <li>About Daraz</li>
            <li>Careers</li>
            <li>Daraz Blog</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Digital Payments</li>
            <li>Daraz Customer University</li>
            <li>Daraz Affiliate Program</li>
            <li>Review & Win</li>
            <li>Meet the winners</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4 className={styles.heading}>Daraz International</h4>
          <ul className={styles.flags}>
            <li>Pakistan</li>
            <li>Bangladesh</li>
            <li>Sri Lanka</li>
            <li>Myanmar</li>
            <li>Nepal</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4 className={styles.heading}>Payment Methods</h4>
          <ul className={styles.paymentMethods}>
            <li>Cash on Delivery</li>
            <li>Visa</li>
            <li>Mastercard</li>
            <li>eSewa</li>
            <li>IME Pay</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4 className={styles.heading}>Verified by</h4>
          <ul className={styles.verified}>
            <li>PCI DSS Compliant</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4 className={styles.heading}>Exclusive Deals and Offers!</h4>
          <ul className={styles.appLinks}>
            <li>App Store</li>
            <li>Google Play</li>
            <li>AppGallery</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h4 className={styles.heading}>Follow Us</h4>
          <ul className={styles.socialLinks}>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>Website</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
