import './App.css';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import OrderPage from './pages/OrderPage';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/order" element={<OrderPage />} />
        </ Routes>
      </Router>
    </>
  );
}

export default App;
