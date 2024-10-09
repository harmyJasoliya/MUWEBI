import * as React from 'react';
// import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { dividerClasses } from '@mui/material';
// icon
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
const pages = [{name : 'Home',path : "/"},{name : 'About',path : "/about"},{name : 'Services',path : "/services"},{name : 'Contect',path : "/contect"},{name : 'Team',path : "/team"}];
const settings = ['Home', 'About', 'Services', 'contect', 'Team'];

function Header() {
  return (
    <>
      <AppBar position="static"
        sx={{
          backgroundColor: "black",
          class: 'navbar'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              component="img"
              src="https://www.themezaa.com/html/pofo/images/logo-white.png"
              sx={{
                backgroundSize: 'cover',
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
            </Typography>

            <Typography
              component="a"
              sx={{
                marginLeft: '400px',
                borderRight: 1,
                borderRightColor: 'gray',
                textColor:'white'
              }}
            >
              <Router>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      sx={{ mx: 2, color: 'white', display: 'block' }}
                    >

                      <Link to={page.path}>
                        {page?.name}
                      </Link>
                    </Button>
                  ))}

                </Box>
              </Router>

            </Typography>


            <Typography>
              <SearchIcon
                sx={{
                  margin: '10px',
                  marginTop: '10px',
                  fontSize: '20px',
                }}
              />
            </Typography>
            <Typography>
              <FacebookOutlinedIcon sx={{
                paddingLeft: '10px', borderLeft: 1,
                borderLeftColor: 'gray', fontSize: '20px',
              }} />
              <TwitterIcon sx={{ paddingLeft: '10px', fontSize: '20px', }} />
              <SportsBasketballIcon sx={{ paddingLeft: '10px', fontSize: '20px', }} />
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>



    </>
  );
}

export default Header;
