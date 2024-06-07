import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  function submitHandler(e) {
    e.preventDefault();
    navigate(`products/search?query=${searchQuery}`);
  }
  // console.log(searchParams.get("search"));
  return (
    <div className={styles.navbar}>
      <div className={styles.leftSection}>
        <Link to={"/"}>
          <img src="/logo.png" alt="Daraz Logo" className={styles.logo} />
        </Link>
        <div className={styles.links}>
          <Link to={"/"}>Become a Seller</Link>
          <Link to={"/"}>Payments & Recharge</Link>
          <Link to={"/"}>Help & Support</Link>
          <Link to={"/"}>Daraz Logistics Partner</Link>
        </div>
      </div>
      <div className={styles.searchSection}>
        <form onSubmit={submitHandler} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Search in Daraz"
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={styles.searchButton}>🔍</button>
        </form>
      </div>
      <div className={styles.rightSection}>
        <Link to={"login"}>Login</Link>
        <Link to={"signup"}>Sign Up</Link>
        <div className={styles.language}>
          <span>EN</span>
          <span>▼</span>
        </div>
        <div className={styles.cart}>
          <Link to={"/carts"} role="img" aria-label="cart">
            🛒
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
