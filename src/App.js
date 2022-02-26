import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import db from './FirebaseConfig.js';
import { doc, setDoc, getDoc } from "firebase/firestore";

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

const userConverter = {
  toFirestore: (user) => {
    return {
      username = user.username,
      email = user.email,
      password = user.password,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new User(data.username, data.email, data.password);
  }
};
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
