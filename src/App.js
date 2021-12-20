import './styles/App.scss'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'; // ROUTER
// ROUTER
import Home from './pages/home/Home';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
