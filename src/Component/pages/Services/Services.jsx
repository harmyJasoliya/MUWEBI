import * as React from 'react';
// import './App.css';
import Header from '../../Header';
import Footer from '../../Footer';
import Bigim from './Bigim';
import Srpart2 from './Srpart2';
import Srpart3 from './Srpart3';
import Srpart4 from './Srpart4';
import { Typography } from '@mui/material';
import Srpart5 from './Srpart5';

function About(){
    return(
        <>
            {/* <Header/>  */}
            <Bigim/>
            <Srpart2/>
            <Srpart3/>
            <Srpart4/>
            <Srpart5/>
            {/* <Footer/> */}
        </>
    );

}
export default About;