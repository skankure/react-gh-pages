import './App.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import Footer from './components/Footer'
import Main from './components/Main';
import Header from './components/Header'
import Terms from './components/Terms';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Privacy from './components/Privacy';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])
  return (<>
    <>
  
  
    <Header/>
      
 


  

      
      <Routes>
      <Route path="/" element={<Main />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/privacy" element={<Privacy />} />
        </Routes>
      
      <Footer/> 
    
   


    </>
  </>
  );
}



export default App;
