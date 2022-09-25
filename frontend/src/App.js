import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react'
import { io } from 'socket.io-client'
const App = () => {
  const [time, setTime] = React.useState('fetching')

  React.useEffect(() => {
    const socket = io('http://localhost:5000')

    socket.on('connect', () => console.log(socket.id))
    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 5000)
    })

    socket.on('time', (data) => setTime(data))
    socket.on('disconnect', () => setTime('server disconnected'))

  }, [])

  return (
    <div className="App">
      {time}
    </div>
  )
}

export default App;
