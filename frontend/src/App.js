import './App.css';

import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './components/LandingPageComp/signup';
import Login from './components/LandingPageComp/login';
import Home from './pages/Home';
import ProtectedRoute from './components/Protection/ProtectedRoute';


function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Login' element={<Login />} />
      <Route path="/" element={<LandingPage />} />
      

      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>


    </Routes>
  </BrowserRouter>
  
  </>

  );
}

export default App;
