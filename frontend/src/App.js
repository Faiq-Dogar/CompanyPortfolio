import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About/About';
import Navbar from './Components/Navbar';



function App() {

  return (
    <>
                <Navbar />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </>
  );
}

export default App;