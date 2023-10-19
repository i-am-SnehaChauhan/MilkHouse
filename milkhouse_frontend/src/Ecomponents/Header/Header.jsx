import { useState } from 'react'
import styles from '../../components/Navbar/Navbar.module.css';
import logo from "../../image/logo.png";
import Search from './Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import {AppBar, Toolbar, Typography,List, IconButton, Drawer, styled, Box} from '@mui/material';
import CustomButtons from './CustomButtons';
import { Button} from '@mui/material'
import { Link } from 'react-router-dom';
function Header() {

    const ButtonWrapper = styled('span')(({ theme }) => ({ 
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }));
  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    fontSize:'18px',fontFamily:'Roboto',
    color:'inherit',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
    ':hover':{
        color:'#f7bd00'
    }
}));
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  return (
    <div className="App">
      <header className="App-header">


        <nav className={`${styles.navbar}`}>


          {/* logo */}
          
          <a href='/' className={`${styles.logo}`}>
          <img className={styles.navimg} src={logo}></img>
            MilkDelights</a>

            <Search/>
          <ul style={{display:'flex',justifyContent:'space-between',gap:'60px',margin:'0 1% 0 auto'}}>
            <li onClick={removeActive}>
              <Container to='/' style={{fontSize:'17px',fontFamily:'Roboto',fontWeight:'450'}}>
              <Typography style={{color:'white',fontSize:'17px',fontWeight:'450',':hover': {
          color: 'yellow'
        }}}>Home</Typography>
              </Container>
            </li>
           <li onClick={removeActive}>
            <Container to='/cart'>
            <PersonIcon style={{color:'white'}} />
            <Typography style={{color:'white',fontSize:'17px',fontWeight:'450'}}>Login</Typography>
        </Container>
            </li>
            <li onClick={removeActive}>
            <Container to='/cart'>
            <ShoppingCartIcon style={{color:'white'}} />
            <Typography style={{color:'white',fontSize:'17px',fontWeight:'450'}}>Cart</Typography>
        </Container>
            </li>
          </ul>
          <ButtonWrapper>
                    <CustomButtons  />
                </ButtonWrapper>

          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
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

;