import {AppBar, Toolbar, Typography, Button, styled, Box} from '@mui/material';
import '@fontsource/roboto/300.css';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledAppBar = styled(AppBar)({
    background: 'linear-gradient(45deg, #000000 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: '60px',

});

const Component = styled('Box')`
    margin-left: 8%;
    line-height: 0;

`
const SubHeading = styled('Typography')`
    font-size: 10px;
    font-style: italic;
    margin-left: 20px;
`
const ButtonWrapper = styled('Box')`
    margin: 0 2% 0 auto;
`

const Header = () => {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <Component>
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
                    <CustomButtons />
                </ButtonWrapper>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;