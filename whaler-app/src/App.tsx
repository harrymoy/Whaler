import './App.css';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import OrderPage from './pages/OrderPage';
import TournamentsPage from './pages/TournamentsPage';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
        </ Routes>
      </Router>
    </>
  );
}

export default App;
