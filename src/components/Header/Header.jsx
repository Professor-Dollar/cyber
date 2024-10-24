"use client";
import styles from "./Header.module.css";
import CartIcon from "../../../public/CartIcon";
import FavoritesIcon from "../../../public/FavoritesIcon";
import SearchIcon from "../../../public/SearchIcon";
import UserIcon from "../../../public/UserIcon";
import Burger from "../../../public/Burger";
import { useState } from "react";

const Header = () => {
  let [showNav, setShowNav] = useState(true);
  const [selectedLink, setSelectedLink] = useState("#home");

  const handleClick = (link) => {
    setSelectedLink(link);
  };
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navleft}>
          <div className={styles.logo}>
            <img src="/Logo.png" />
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
          <div
            onClick={() => {
              setShowNav(!showNav);
            }}
            className={styles.burger}
          >
            <Burger />
          </div>
        </div>
      </nav>
      <nav
        style={showNav ? { top: "-102%" } : {}}
        className={styles.phonenav}
      >
        <div className={styles.phonelinks}>
          <a
            href="#"
            className={
              selectedLink === "#home" ? styles.selectedphonenavlink : ""
            }
            onClick={() => handleClick("#home")}
          >
            Home
          </a>
          <a
            href="#"
            className={
              selectedLink === "#about" ? styles.selectedphonenavlink : ""
            }
            onClick={() => handleClick("#about")}
          >
            About
          </a>
          <a
            href="#"
            className={
              selectedLink === "#contact" ? styles.selectedphonenavlink : ""
            }
            onClick={() => handleClick("#contact")}
          >
            Contact Us
          </a>
          <a
            href="#"
            className={
              selectedLink === "#blog" ? styles.selectedphonenavlink : ""
            }
            onClick={() => handleClick("#blog")}
          >
            Blog
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
