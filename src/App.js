import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './App.css';
import Nav from './Components/Nav';
import Menu from './Components/Menu';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Main />
      </Router>
      <Menu/>
      <Testimonials/>
      <About/>
      <Footer/>

    </>
  );
}
export default App;

