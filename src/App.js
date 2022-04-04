import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ProductInfo from './Pages/ProductInfo';
import CartPage from './Pages/CartPage';
import {Route ,BrowserRouter , Routes} from 'react-router-dom';


import  './Stylesheets/navlayout.css';
import  './Stylesheets/rests.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/login" exact element={<LoginPage/>} />
          <Route path="/register" exact element={<RegisterPage/>} />
          <Route path="/productinfo" exact element={<ProductInfo/>} />
          <Route path="/cart" exact element={<CartPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
