import './App.css';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import logo from './logo.jpg';

function App() {
  return (
    <>
      <Header />
      <img src={logo} alt="Logo" />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}
export default App;

