import SignIn from './SignIn';
import PrivateRoute from './PrivateRoute';
import Home from './Home.js';
import SelectionPage from './SelectionPage.js';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  
      <Routes>
        <Route path='/' element={<PrivateRoute />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/select' element={<SelectionPage />} />
      </Routes>
      
  );
}

export default App;
