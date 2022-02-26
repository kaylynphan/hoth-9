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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
