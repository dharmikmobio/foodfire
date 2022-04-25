import './App.css';
import HomePage from './Pages/HomePage';
import AdminPage from './Pages/AdminPage';
import Admindish from './Pages/Admindish';
import {Route ,BrowserRouter , Routes} from 'react-router-dom';
import  './Stylesheets/navlayout.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function App() {
  return (
    <>
  
      <ToastContainer/>
      <BrowserRouter>
       
        <Routes>
          <Route path="/addr" exact element={<AdminPage/>} />
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/addd" exact element={<Admindish/>} />
        </Routes>
        
      </BrowserRouter>
     
  
   
    </>
  );
}

export default App;


