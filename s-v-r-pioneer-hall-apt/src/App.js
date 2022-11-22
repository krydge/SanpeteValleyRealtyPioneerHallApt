import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu/Menu'
import Home from './Components/Home/Home';
import Notifications from './Components/Notifications/Notifications';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Notifications></Notifications>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/aboutus" element={<Job/>}/> */}
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
