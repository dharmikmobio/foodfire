import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ProductInfo from './Pages/ProductInfo';
import CartPage from './Pages/CartPage';
import ForgotPass from './Pages/ForgotPass';
import {Route ,BrowserRouter , Routes , Navigate} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';


import  './Stylesheets/navlayout.css';
import  './Stylesheets/rests.css';
import  './Stylesheets/register.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer/>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ProtectedRoutes><HomePage/></ProtectedRoutes> } />
          <Route path="/productinfo" exact element={<ProtectedRoutes><ProductInfo/></ProtectedRoutes>} />
          <Route path="/cart" exact element={<ProtectedRoutes><CartPage/> </ProtectedRoutes>} />


          
          <Route path="/login" exact element={<LoginPage/>} />
          <Route path="/register" exact element={<RegisterPage/>} />
          <Route path="/forgotPass" component={ForgotPass} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;


export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("currentUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

