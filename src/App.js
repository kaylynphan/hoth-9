import './App.css';
import Home from './Home.js';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PrivateRoute from './PrivateRoute';
import SelectionPage from './SelectionPage.js';
import FriendsPage from './FriendsPage';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div style={{height: '100vh'}}>
      <Routes>
        <Route path='/' element={<PrivateRoute />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/select' element={<SelectionPage />} />
        <Route path='/friends' element={<FriendsPage />} />
      </Routes>
    </div>
  );
}

export default App;
