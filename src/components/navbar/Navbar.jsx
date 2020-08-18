import React, { useContext, useEffect, useState, Fragment } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { IoIosCart } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import { GoBook } from 'react-icons/go';

// Hamburger Icons
import { RiMenuLine } from 'react-icons/ri';
import { RiMenu4Line } from 'react-icons/ri';

import { CartContext } from '../../context/CartContext';
import websiteBanner from './cannoliMain.png';
import websiteBannerMobile from './cannoliMainMobile.png';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [globalCart, setGlobalCart, globalTotal] = useContext(CartContext);
  const [oldPosition, _setOldPosition] = useState(0);
  const [visible, setVisible] = useState(false);
  const [
    mobileNavbarHamburgerMenuVisible,
    setMobileNavbarHamburgerMenuVisible,
  ] = useState(false);

  const myStateRef = React.useRef(oldPosition);
  const setOldPosition = (data) => {
    myStateRef.current = data;
    _setOldPosition(data);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => { }, [oldPosition]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    const difference = myStateRef.current - currentScrollPos;

    setOldPosition(currentScrollPos);

    if (difference < 0) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    // console.log(currentScrollPos);
    if (currentScrollPos <= 0) {
      setVisible(true);
    }
  };

  const totalQuantity = () => {
    let total = 0;
    globalCart.forEach((element) => {
      total += element.smallIndQuantity;
      total += element.mediumIndQuantity;
      total += element.largeIndQuantity;
      total += element.smallBoxQuantity * 6;
      total += element.mediumBoxQuantity * 4;
      total += element.largeBoxQuantity * 2;
    });
    return total;
  };
  return (
    <Fragment>
      <div className={styles.desktopNavbar}>
        <div className={styles.flexContainerTwoItems}>
          <img
            className={styles.navImage}
            src={websiteBanner}
            alt="cannoli windsor"
          />
          <div className={styles.flexContainerNavButtons}>
            <Link className={styles.navMenuButton} to="/">
              Home
            </Link>

            <Link className={styles.navMenuButton} to="/contact">
              Contact Us
            </Link>

            <Link className={styles.navMenuButton} to="/menu">
              Pre-Order Menu
            </Link>

            <Link className={styles.navMenuButton} sto="/order">
              Cart
              <label className={styles.cartIconContainer}>
                <IoIosCart className={styles.cartIcon} size="1.5em" />
                <span className={styles.cartIconNumber}>{globalTotal}</span>
              </label>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={styles.mobileNavbar}>
        <div className={styles.mobileNavContainer}>
          <img
            className={styles.navImageMobile}
            src={websiteBannerMobile}
            alt="cannoli windsor"
          />
          {mobileNavbarHamburgerMenuVisible ? (
            <button
              className={styles.hamburgerButton}
              onClick={() => setMobileNavbarHamburgerMenuVisible(false)}
            >
              <RiMenu4Line className={styles.hamburgerMenu} size="3em" />
            </button>
          ) : (
              <button
                className={styles.hamburgerButton}
                onClick={() => setMobileNavbarHamburgerMenuVisible(true)}
              >
                <RiMenuLine className={styles.hamburgerMenu} size="3em" />
              </button>
            )}
        </div>

        {/* Side Navigation Opened By Hamburger Menu */}

        {mobileNavbarHamburgerMenuVisible && (
          <div className={styles.mobileMenuContainer}>
            <div className={styles.modalShadow}></div>
            <Link
              className={styles.navMenuButtonHamburger}
              onClick={() => setMobileNavbarHamburgerMenuVisible(false)}
              to="/"
            >
              Home
            </Link>

            <Link
              className={styles.navMenuButtonHamburger}
              onClick={() => setMobileNavbarHamburgerMenuVisible(false)}
              to="/contact"
            >
              Contact Us
            </Link>

            <Link
              className={styles.navMenuButtonHamburger}
              onClick={() => setMobileNavbarHamburgerMenuVisible(false)}
              to="/menu"
            >
              Pre-Order Menu
            </Link>

            <Link
              className={styles.navMenuButtonHamburger}
              onClick={() => setMobileNavbarHamburgerMenuVisible(false)}
              sto="/order"
            >
              Cart
              <label className={styles.cartIconContainer}>
                <IoIosCart className={styles.cartIcon} size="1.5em" />
                <span className={styles.cartIconNumber}>{globalTotal}</span>
              </label>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};
