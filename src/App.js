import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Rooms from './Components/Rooms/Rooms';
import SeeDo from './Components/See&Do/SeeDo';
import Services from './Components/Services/Services';
import { BsFillChatDotsFill } from 'react-icons/bs';
import {FaTripadvisor, FaFacebookF, FaInstagram} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="chat-icon">
        <BsFillChatDotsFill />
      </div>
      <Navbar />
      <Home />
      <About />
      <Rooms />
      <Services />
      <Gallery />
      <SeeDo />
      <Contact />
      <Footer />
      <div className='social-logo-flex'>
      <div className='logo-container'>
        <div className='social-logo trip-advisor'><FaTripadvisor/></div>
        <div className='social-logo facebook'><FaFacebookF/></div>
        <div className='social-logo instagram'><FaInstagram /></div>
      </div>
      </div>
    </div>
  );
}

export default App;
