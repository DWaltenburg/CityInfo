import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/Navbar';
import MainContent from './components/MainContent';
import PageRoutes from './components/PageRoutes';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      {/* <MainContent /> */}
      <PageRoutes />
    </div>
  );
}

export default App;
