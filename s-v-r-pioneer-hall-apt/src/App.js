import './App.css';
import Menu from './Components/Menu/Menu'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer'
import Room from './Components/Room/Room';
import Building from './Components/Building/Building';
import ContactForm from './Components/ContactForm/ContactForm';
import { useState } from 'react';
import Amenities from './Components/Amenity/Amenitie';
import Qa from './Components/Faq/Qa';
import FloorPlan from './Components/FloorPlan/FloorPlan';


function App() {
  const [page, setPage] = useState("/")
  console.log(page)
  return (
    <div className="App">
      <Menu parentCallBack={setPage}></Menu>
      {page === "/" &&
        <Home parentCallBack={setPage}/>
      }
      {page === "/gallery" &&
        <Room />
      }
      {page === "/aboutus" &&
        <Room />
      }
      {page === "/building" &&
        <Building />
      }
      {page === "/contact" &&
        <ContactForm />
      }
      {page === "/amenities" &&
        <Amenities/>
      }
      {page === "/faq" &&
      <Qa/>
      }
      {page === "/floorplan" &&
      <FloorPlan/>
      }

      <Footer parentCallBack={setPage}></Footer>
    </div>
  );
}

export default App;
