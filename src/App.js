import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import SignIn from './SignIn';
import PrivateRoute from './PrivateRoute';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  
      <Routes>
        <Route path='/' element={<PrivateRoute />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      
  );
}

export default App;
