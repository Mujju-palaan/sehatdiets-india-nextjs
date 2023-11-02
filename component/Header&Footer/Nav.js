"use client";
import styles from "./navbar.module.css";
import { CgCloseR, CgMenu } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(null);
  // const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  // console.log("value " + openMenu);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={openMenu ? `${styles.active}` : ""}>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem} >
              <Link
                style={{color:'#50D5B1'}}
                className={styles.navbarLink}
                href="/"
                onClick={() => setOpenMenu(false)}
              >
                Home
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link
                style={{color:'#50D5B1'}}
                className={styles.navbarLink}
                href="/about"
                onClick={() => setOpenMenu(false)}
              >
                About
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link
                style={{color:'#50D5B1'}}
                className={styles.navbarLink}
                onClick={() => setOpenMenu(false)}
                href="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link
                style={{color:'#50D5B1'}}
                className={styles.navbarLink}
                onClick={() => setOpenMenu(false)}
                href="/contactus"
              >
                Contact
              </Link>
            </li>
            {/* <li>
            {isAuthenticated && <h3>Hello {user.name}</h3>}
            </li>
            {isAuthenticated ? (
              <li>
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin }
                    })
                  }
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button onClick={() => loginWithRedirect()}>Log In</button>
              </li>
            )}

            <li>
              <button
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
              >
                Log Out
              </button>
            </li> */}
          </ul>

          {/* //nav icon */}
          <div className={styles["mobile-navbar-btn"]}>
            <CgMenu
              name="menu-outline"
              className={styles["mobile-nav-icon"]}
              onClick={() => setOpenMenu(true)}
            />
            <CgCloseR
              name="close-outline"
              className={`${styles["mobile-nav-icon"]} ${styles["close-outline"]}`}
              onClick={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
