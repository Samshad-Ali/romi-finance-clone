import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
function App() {
  return (
    <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
  </Routes>
  <Footer/>
    </>
  );
}

export default App;
