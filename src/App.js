import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Menu from './Components/Menu';
import Testimonials from './Components/Testimonials';
import About from './Components/About';

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Header/>
      </Router>
      <Menu/>
      <Testimonials/>
      <About/>
    </>
  );
}
export default App;

