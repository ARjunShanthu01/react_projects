import React, { useState } from 'react';
import styles from './Nav.module.css';
import { RiMenu3Line } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} container`}>
      <div className={styles.logo}>
        <a href="#"><img src="/images/logo.png" alt="" /></a>
      </div>

      <ul className={isOpen ? `${styles.navbarItems} ${styles.active}` : styles.navbarItems}>
        <div className={styles.mobile_logo}>
          <a href="#"><img src="/images/logo.png" alt="" /></a>
        </div>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className={styles.toggleButton} onClick={toggleNavbar}>
        {isOpen ? <HiOutlineX /> : <RiMenu3Line />}
      </button>
    </nav>
  );
}

export default Navbar;
