import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/Home/Home';
import Newsroom from './Components/Newsroom/Newsroom';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Csr from './Components/Csr/Csr';
import ContactUs from './Components/ContactUS/ContactUs';
// import HomeServices from './Components/Home/HomeServices/HomeServices';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/newsroom' element={<Newsroom />} />
          <Route path='/csr' element={<Csr />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
 
        <Footer />
      </Router> 
    </>
  );
}

export default App;
