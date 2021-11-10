import './App.css';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div>
      <header className='header-container'>
        <NavBar />
      </header>
      <body className='body-container'>
        <MainPage />
      </body>

    </div>
  );
}

export default App;
