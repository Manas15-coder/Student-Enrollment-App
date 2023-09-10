import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Page3 from './components/Page3';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/detail' element={<Page3/>}/>
    </Routes>
    </>
  );
}

export default App;
