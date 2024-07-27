import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

import { useAuth0 } from "@auth0/auth0-react";
import Loading from './components/Loading';

function App() {
  const { isLoading, error } = useAuth0();
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />}> </Route>
    </Routes>
  );
}

export default App;
