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
  
    <Router>
    <Header/>
      <div>


  

      
      <Routes>
          <Route exact path="/" element={<Main/>}/>

          <Route exact path="/react-gh-pages" element={<Main/>}/>

          <Route exact path="http://www.supriyakankure.com/react-gh-pages/" element={<Main/>}/>

     
          <Route exact path="http://www.supriyakankure.com/privacy-policy" element={<Privacy/>}/>

          <Route exact path="http://www.supriyakankure.com/terms" element={<Terms/>}/>
     
          <Route exact path="/terms" element={<Terms/>}/>
          <Route exact path="/privacy-policy" element={<Privacy/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
      <Footer/> 
    </Router>
   


    </>
  </>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Me() {
  return (
    <div>
      <h2>Me</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
