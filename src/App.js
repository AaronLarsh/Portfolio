import React from 'react';
import Nav from './components/Nav';
import Jumbo from './components/Jumbo';
import Section from './components/Section';
import Aside from './components/Aside';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Jumbo/>
      <Section/>
      <Aside/>
      <Footer/>
    </div>
  );
}

export default App;
