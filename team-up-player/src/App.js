import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />}> </Route>
    </Routes>
  );
}

export default App;
