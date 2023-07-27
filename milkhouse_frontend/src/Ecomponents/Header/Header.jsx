import React, { useState } from 'react';
import {AppBar, Toolbar, Typography,List, IconButton, Drawer, styled, Box} from '@mui/material';
import '@fontsource/roboto/300.css';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(45deg, #000000 30%, #FF8E53 90%);
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  height: 60px;
`;

const Component = styled(Link)`
    margin-left: 8%;
    line-height: 0;
    text-decoration: none;  
    color: #FFFFFF;

`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
    margin-left: 20px;
    margin-top: 0px;
`
const ButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }
    const list = () => (
        <Box style={{ width: 200}} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );

    return (
        <StyledAppBar position="static">
            <Toolbar style={{ minHeight: 55 }}>
            <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <Component to="/dairy" >
                   <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }} fontFamily={'Roboto'}>
                        MilkHouse
                   </Typography>
                   <Box>
                        <SubHeading>Live&nbsp;  
                            <Box component="span" style={{color: '#FFE500'}}>Healthy&nbsp; </Box> 
                            Life
                        </SubHeading>
                   </Box>
                </Component>

                <Search />

                <ButtonWrapper>
                    <CustomButtons  />
                </ButtonWrapper>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;