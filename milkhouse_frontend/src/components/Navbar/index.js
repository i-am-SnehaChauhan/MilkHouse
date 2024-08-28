import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../image/logo.png";
import { auth } from "../../firebase";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Avatar } from "@mui/material";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      removeActive();
    }
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
    closeDropdown();
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <a href="/" className={`${styles.logo}`}>
            <img className={styles.navimg} src={logo} alt="MilkDelights Logo" />
            MilkDelights
          </a>

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <a href="/" className={`${styles.navLink}`}>
                Home
              </a>
            </li>
            <li onClick={() => scrollToSection("aboutSection")}>
              <a href="#" className={`${styles.navLink}`}>
                About
              </a>
            </li>
            <li onClick={() => scrollToSection("featureSection")}>
              <a href="#" className={`${styles.navLink}`}>
                Features
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="/contact" className={`${styles.navLink}`}>
                Contact
              </a>
            </li>

            {user ? (
              <li
                className={`${styles.navLink} ${styles.accountDropdown}`}
                onClick={toggleDropdown}
              >
                <PersonIcon style={{ marginRight: 10 }} />
                <Typography
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Account
                </Typography>
                <ul
                  className={`${styles.dropdownMenu} ${
                    isDropdownOpen ? styles.show : ""
                  }`}
                >
                  <div className={styles.dropdownHeader}>
                    <CloseIcon
                      className={styles.dropdownCloseIcon}
                      onClick={closeDropdown}
                    />
                  </div>
                  <li>
                    <a href={user.email === 'john123@gmail.com' ? '/dashboard' : "/profile" }className={`${styles.navLink}`}>
                      Profile Settings
                    </a>
                  </li>
                  <li onClick={handleLogout}>
                    <a href="/" className={`${styles.navLink}`}>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <li onClick={removeActive}>
                <a href="/signin" className={`${styles.navLink}`}>
                  Register
                </a>
              </li>
            )}
          </ul>

          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
