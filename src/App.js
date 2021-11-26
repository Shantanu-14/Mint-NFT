import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Collaborators from './Screens/Collaborators';
import Details from './Screens/Details';
import Pricing from './Screens/Pricing';
import Mint from './Screens/Mint';

const Routing =()=>{
  return(
    <Routes>
    <Route exact={true} path="/" element={<Collaborators/>} />
    <Route path="/details" element={<Details/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/mint" element={<Mint/>}/>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div>
      <Header/>
      <Routing/>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
