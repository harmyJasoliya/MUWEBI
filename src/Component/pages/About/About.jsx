import * as React from 'react';
// import './App.css';
import Header from '../../Header';
import Footer from '../../Footer';
import Abbigimg from './Abbigimg';
import Abpart1 from './Abpart1';
import Abpart2 from './Abpart2';
import Abpart3 from './Abpart3';
import Abpart4 from './Abpart4';
import Abpart5 from './Abpart5';
function About(){
    return(
        <>
        {/* <Header/> */}
        <Abbigimg/>
        <Abpart1/>
        <Abpart2/>
        <Abpart3/>
        <Abpart4/>
        <Abpart5/>
        {/* <Footer/> */}
        
        </>
    );
}
export default About;