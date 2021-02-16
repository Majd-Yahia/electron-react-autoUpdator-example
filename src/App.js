import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const { ipcRenderer } = window.require("electron");

ipcRenderer.send('app_version');
ipcRenderer.on('app_version', (event, arg) => {
  ipcRenderer.removeAllListeners('app_version');
  console.log('Version is Correct!');
});

ipcRenderer.on('update_available', () => {
  ipcRenderer.removeAllListeners('update_available');
  console.log('Update Available!');
});

ipcRenderer.on('update_not_available', () => {
  ipcRenderer.removeAllListeners('update_not_available');
  console.log('Update Not Available!');
});

ipcRenderer.on('update_downloaded', () => {
  ipcRenderer.removeAllListeners('update_downloaded');
  console.log('Update Downloaded!');
});

class App extends Component {
  render() {
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
}

export default App;
