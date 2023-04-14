import logo from './logo.svg';
import './component/navbar.css';
import Navbar from './component/navbar';
import SlikSlider from './component/slikSlider';
import ProductList from './component/prodectlist';
import {BrowserRouter, Link} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import About from './component/About';
import Home from './component/Home';
import ProductDetails from './component/productDetails';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product/:productId' element={<ProductDetails/>}/>
    </Routes>
     
   

    </div>
  );
}

export default App;
