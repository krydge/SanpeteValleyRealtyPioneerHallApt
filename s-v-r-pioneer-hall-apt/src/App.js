
import './App.css';
import Menu from './Components/Menu/Menu'
import Home from './Components/Home/Home';

import Footer from './Components/Footer/Footer'
import Room from './Components/Room/Room';
import Building from './Components/Building/Building';
import ContactForm from './Components/ContactForm/ContactForm';
import { useState } from 'react';

function App() {
  const [page, setPage]= useState("/")
console.log(page)
  return (
    <div className="App">
      <Menu parentCallBack = {setPage}></Menu>
      {page==="/"&&
      <Home />
      }
      {page==="/rooms"&&
      <Room />
      }
      {page==="/building"&&
      <Building />
      }
      {page==="/contact"&&
      <ContactForm />
      }
      
      <Footer></Footer>
    </div>
  );
}

export default App;
