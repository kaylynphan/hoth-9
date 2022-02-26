import './App.css';
import Home from './Home.js';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PrivateRoute from './PrivateRoute';
import SelectionPage from './SelectionPage.js';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path='/' element={<PrivateRoute />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/select' element={<SelectionPage />} />
      </Routes>
  );
}

export default App;
