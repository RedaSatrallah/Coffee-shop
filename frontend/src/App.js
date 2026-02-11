import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { UserDashboard } from './pages/UserDashboard';

function App() {
  return (
    <BrowserRouter>
      <UserDashboard />
    </BrowserRouter>
  );
}

export default App;
