
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import WebHome from './webHome';
import WebServices from './webServices';
import WebAbout from './webAbout';
import WebContact from './webContact';
import WebBooking from './webBook';
import WebEvent from './webEvent';

import logo from './logo.svg';
import myMap from './ph-map.png';
import './App.css';

function App() {
  return (
    <Router>
      
  
    <div className="App">
      <div  className="sect header">
        <Link to='/'>
       <img src={logo}
      className="header-logo"/>
      </Link>
       <ul className="navmenu">
       <Link to='/services'>
        <li>
          Services </li></Link>

          <Link to='/about'>
        <li>
          About </li> </Link>

          <Link to='/contact'>
        <li>
          Contact </li> </Link>

          <Link to='/book'>
        <li>
          Book!</li> </Link>
       </ul>
      </div>
      <Routes>
        <Route path="/" element={<WebHome />} />
        <Route path="/services" element={<WebServices />} />
        <Route path="/about" element={<WebAbout/>} />
        <Route path="/contact" element={<WebContact/>} />
        <Route path="/book" element={<WebBooking/>} />
        <Route path="/event/:eventId" element={<WebEvent/>}/>
        <Route path='/booking/:eventId' element={<WebBooking/>}/>
      </Routes>


      <div className="sect footer">

        <div className="footer-part">
          <img src={logo} />
        </div>
        <div className="footer-part">
        <ul className="footer-links">
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
        <li>Book!</li>
       </ul>
       
        </div>
        <div className="footer-part">
          <img src={myMap} />
        </div>
        <p className="c-statement">copyright statement goes here!</p>
      </div>
    </div>
    
    </Router>
  );
}

export default App;
