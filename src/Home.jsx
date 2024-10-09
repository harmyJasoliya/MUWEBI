import * as React from 'react';
import './App.css';




// import Header from './Component/Header';
import Bigimg from './Component/Bigimg';
import Twopart from './Component/Twopart';
import Video from './Component/Video';
import Skills from './Component/Skills';
import Lastimg from './Component/Lastimg';
// import Footer from './Component/Footer';



function Home() {


  return (
    <>
      {/* <Header/> */}
      <Bigimg/>
      <Twopart/>
      <Video/>
      <Skills/>
      <Lastimg/>
      {/* <Footer/> */}

    </>
    );
 }     
export default Home;