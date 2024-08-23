import { useState, useEffect } from "react";
import styles from "../../components/Navbar/Navbar.module.css";
import logo from "../../image/logo.png";
import Search from "./Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

function Header() {
  const ButtonWrapper = styled("span")(({ theme }) => ({
    margin: "0 5% 0 auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));

  // State to hold authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user); // Set true if user exists, false otherwise
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // State to handle mobile menu toggle
  const [isActive, setIsActive] = useState(false);

  // State to handle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const Container = styled(Link)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    fontFamily: "Roboto",
    color: "inherit",
    textDecoration: "none",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    ":hover": {
      color: "#f7bd00",
    },
  }));

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <a href="/" className={`${styles.logo}`}>
            <img className={styles.navimg} src={logo} alt="logo" />
            MilkDelights
          </a>
          <Search />
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Container
                to="/dairy"
                style={{
                  fontSize: "17px",
                  fontFamily: "Roboto",
                  fontWeight: "450",
                }}
              >
                <Typography
                  style={{
                    color: "white",
                    fontSize: "17px",
                    fontWeight: "450",
                    ":hover": { color: "yellow" },
                  }}
                >
                  Home
                </Typography>
              </Container>
            </li>
            <li onClick={removeActive}>
              <Container to="/cart">
                <ShoppingCartIcon style={{ color: "white" }} />
                <Typography
                  style={{
                    color: "white",
                    fontSize: "17px",
                    fontWeight: "450",
                  }}
                >
                  Cart
                </Typography>
              </Container>
            </li>
           {isAuthenticated ? (
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
                    <a href="/profile" className={`${styles.navLink}`}>
                      Profile Settings
                    </a>
                  </li>
                  <li onClick={() => {
                                            auth.signOut();
                                            closeDropdown();
                                        }}>
                    <a href="/dairy" className={`${styles.navLink}`}>
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

export default Header;
