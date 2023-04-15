import logo from './logo.svg';
import './component/home/navbar.css';
import Navbar from './component/home/navbar';
import SlikSlider from './component/about/slikSlider';
import ProductList from './component/products/prodectlist';
import {BrowserRouter, Link} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import About from './component/about/About';
import Home from './component/home/Home';
import ProductDetails from './component/products/productDetails';



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
