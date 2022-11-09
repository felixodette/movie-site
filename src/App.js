import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);

  const createUser = (user) => {
    user.numGamesPlayed = 0;
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className={"App-title"}>ReactND - Coding Practice</h1>
      </header>
    </div>
  );
}

export default App;
