import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PublicRoutes from './router/PublicRoutes';
//import AuthProvider from './contexts/AuthProvider';
//import AdminRoutes from './router/AdminRoutes';
//import ClientRoutes from './router/ClientRoutes';
//import { CartProvider } from './contexts/CartProvider';
//import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
