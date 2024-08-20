import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../image/logo.png";
import { auth } from "../../firebase";
import PersonIcon from "@mui/icons-material/Person";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState(null);
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

  // Scroll to section on the page
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      removeActive();
    }
  };

  // Handle user logout
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* Logo */}
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
            <li onClick={removeActive}>
              <a href="/donation" className={`${styles.navLink}`}>
                Donation
              </a>
            </li>

            {user ? (
              <li className={`${styles.navLink} ${styles.accountDropdown}`}>
                <PersonIcon />
                <span> Account </span>
                <ul className={styles.dropdownMenu}>
                  <li>
                    <a href="/profile">My Profile</a>
                  </li>
                  <li onClick={handleLogout}>
                    <a href="/">Logout</a>
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
