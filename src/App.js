import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Header/>
      </Router>
    </>
  );
}
export default App;

