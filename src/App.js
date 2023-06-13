import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import Cust from './components/Customer';
import Pro from './components/product';
import Resetpassword from './components/forgot';
import LaptopLists from './components/LaptopLists';
import Product from './components/productDetails';
import ProductHome from './components/productHome';
import Product1 from './components/product1';
import Product3 from './components/product3';
import Product2 from './components/product2';
import Product4 from './components/product4';
import Product5 from './components/product5';
import Product6 from './components/product6';
import Product7 from './components/product7';
import Product8 from './components/product8';
import Product9 from './components/product9';
import AddProducts from './components/addproducts';




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/sign-up" element={<SignUp/>}></Route>
      <Route path="/customer-details" element={<Cust/>}></Route>
      <Route path="/product-details" element={<Pro/>}></Route>
      <Route path="/forgot-pass" element={<Resetpassword/>}></Route>
      <Route path="/laptop-page" element={<LaptopLists/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/products" element={<ProductHome/>}></Route>
      <Route path="/product1" element={<Product1/>}></Route>
      <Route path="/product2" element={<Product2/>}></Route>
      <Route path="/product3" element={<Product3/>}></Route>
      <Route path="/product4" element={<Product4/>}></Route>
      <Route path="/product5" element={<Product5/>}></Route>
      <Route path="/product6" element={<Product6/>}></Route>
      <Route path="/product7" element={<Product7/>}></Route>
      <Route path="/product8" element={<Product8/>}></Route>
      <Route path="/product9" element={<Product9/>}></Route>
      <Route path="/add-Items" element={<AddProducts/>}></Route>

  </Routes>
   );
}

export default App;
