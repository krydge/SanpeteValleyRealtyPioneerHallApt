import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu/Menu'
import Home from './Components/Home/Home';
import Notifications from './Components/Notifications/Notifications';
import Footer from './Components/Footer/Footer'
import ImageViwer from './Components/ImageViewer/ImageViewer.jsx';
import Room from './Components/Room/Room';
import Building from './Components/Building/Building';
import ContactForm from './Components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Notifications></Notifications>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Room/>}/>
          <Route path="/building" element={<Building/>}/>
          <Route path="/contact" element={<ContactForm/>}/>
          <Route path="/apply" element={<Room/>}/>
          <Route path="/payrent" element={<Room/>}/>
          <Route path="/aboutus" element={<Room/>}/>
          
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
