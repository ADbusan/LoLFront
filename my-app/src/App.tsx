import React from 'react';
import './App.css';
import Body from './view/Athentication/Body';
import Header from './view/Athentication/Header';
import Footer from './view/Athentication/Footer';
import Searchin from './view/Athentication/Searchin';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Searchin" element={<Searchin/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}