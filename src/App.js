import SignIn from './SignIn';
import PrivateRoute from './PrivateRoute';
import Home from './Home.js';
import Select from './Select.js';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  
      <Routes>
        <Route path='/' element={<Select />} />
        {/*<Route path='/' element={<PrivateRoute />} />*/}
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      
  );
}

export default App;
