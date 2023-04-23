import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    const checkServer = async () => {
      const res = await fetch('http://127.0.0.1/api/test')
      const json =  await res.json()
      console.log('json', json)
    }
  
    checkServer()
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Template MERN ready and hot reload in React set up
        </a>
      </header>
    </div>
  );
}

export default App;
