import React, {  useState } from "react";
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import styles from "./Navbar.module.css";
import { Link,  useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/userContext";
import { useCarts } from "../../contexts/cartsContext";
import Button from "../Button/Button";
import Dropdown from "../DropDown/DropDown";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const {user,onHandelSetUser}=useUser()
  const {cartsNum}=useCarts()

 
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  function submitHandler(e) {
    e.preventDefault();
    navigate(`products/search?query=${searchQuery}`);
  }
 
function handelLogOut(){
  localStorage.removeItem('user')
  onHandelSetUser({})
  navigate('/login')
}
  
  
  return (
    <div className={styles.navbar}>
      <div className={styles.upperSection}>
       
        <div className={styles.links}>
          <Link to={"/"}>Become a Seller</Link>
          <Link to={"/"}>Payments & Recharge</Link>
          <Link to={"/"}>Help & Support</Link>
          <Link to={"/"}>Daraz Logistics Partner</Link>
        </div>
      </div>


      <div className={styles.downSection}> 
      
        <Link to={"/"}>
          <img src="/logo.png" alt="Daraz Logo" className={styles.logo} />
        </Link>
      
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

     
      
        <div className={styles.rightSection}>
          {user?.firstName?
           <Dropdown userName={user?.firstName} userImg={user?.image} onHandelLogOut={handelLogOut}/>
          // <div className={styles.user}>
          //   {/* <div className={styles.userInfo}>
            
          //   <img src={user.image} alt={user.firstName} />
            
          //     <div>
          //     <p>Hello {user.firstName}</p>
          //     <strong>Order & Account</strong>
             
          //     </div>

          //   </div> */}
            
            
          //   <Button onClick={handelLogOut}><UserIcon width={20} height={20}/> Log Out</Button>
          // </div>
            :<>
            <Link to={"login"}>
            <Button><UserIcon width={20} height={20}/> Login</Button></Link>
          
        </>}
          <Button>
          <div className={styles.language}>
            <span>EN</span>
            <span>▼</span>
          </div>
          </Button>
        

          <Link to={"/carts"} role="img" aria-label="cart">
          <Button>
          <div className={styles.cart}>
        <ShoppingCartIcon className={styles.cartIcon} />
        {cartsNum > 0 && <div className={styles.badge}>{cartsNum}</div>}
      </div>
          </Button>
          </Link>
        </div>
     </div>
    
    </div>
  );
};

export default Navbar;
