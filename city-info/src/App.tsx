import React from 'react';
import './App.css';
import NavigationBar from './components/Navbar';
import PageRoutes from './components/PageRoutes';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <PageRoutes />
    </div>
  );
}

export default App;
