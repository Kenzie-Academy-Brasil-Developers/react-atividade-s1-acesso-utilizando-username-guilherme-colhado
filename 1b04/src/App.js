import { useState } from 'react'
import './App.css';
import Logado from './components/Logado';
import Deslogado from './components/Deslogado';

function App() {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        {login?<Logado setLogin={setLogin} user={user}/>: <Deslogado setUser={setUser} setLogin={setLogin}/>}
      </header>
    </div>
  );
}

export default App;
