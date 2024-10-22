"use client";
import styles from "./Header.module.css";
import CartIcon from "../../../public/CartIcon";
import FavoritesIcon from "../../../public/FavoritesIcon";
import SearchIcon from "../../../public/SearchIcon";
import UserIcon from "../../../public/UserIcon";
import Burger from "../../../public/Burger";

const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navleft}>
          <div className={styles.logo}>
            <img src="/Logo.png"/>
          </div>
          <a href="" className={styles.search}>
            <SearchIcon />
            <input type="text" placeholder="Search" className={styles.search} />
          </a>
        </div>
        <div className={styles.navright}>
          <div className={styles.links}>
            <a href="" className={styles.selectedlink}>
              Home
            </a>
            <a href="">About</a>
            <a href="">Contact Us</a>
            <a href="">Blog</a>
          </div>
          <div className={styles.icons}>
            <FavoritesIcon />
            <CartIcon />
            <UserIcon />
          </div>
          <div className={styles.burger}>
            <Burger />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
