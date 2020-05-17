import React from 'react';
import './App.css';
import Header from '../../layout/Header/Header.js';
import Routes from '../../config/routes';
import setAuthHeader from '../../utils/setAuthHeader';
import UserAPI from '../../api/UserAPI';
import FloorplanContainer from '../../containers/FloorplanContainer';

function App() {
  //TODO auth insertion
  
  return (
    <>
    <div className="App">
      <Header />
      <Routes />
    </div>
    </> 
  );
}

export default App;
