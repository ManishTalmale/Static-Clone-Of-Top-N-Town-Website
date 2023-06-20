import './App.css';
import Slider from './component/Slider';
import Nav from './component/Nav';
import Franchise from './component/Franchise';
import Contact from './component/Contact';
import Product from './component/Product';
import Career from './component/Career';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>     
        <Route path="/" element={<Slider/>}></Route>
        <Route path="/franchise" element={<Franchise/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/career" element={<Career/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
