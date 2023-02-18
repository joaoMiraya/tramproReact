import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

import Header from './components/patterns/header';
import Footer from './components/patterns/footer'
function App() {
  return (
   
    <div className="App">
      <Header />
    <Outlet />
    <Footer />

    </div>
    
  )
}

export default App
