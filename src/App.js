import './App.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import Footer from './components/Footer'
import Main from './components/Main';
import Header from './components/Header'


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])
  return (<>
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  </>
  );
}

export default App;
