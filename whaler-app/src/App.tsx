import './App.css';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div>
      <header className='header-container'>
        <NavBar />
      </header>
      <div className='body-container'>
        <MainPage />
      </div>

    </div>
  );
}

export default App;
