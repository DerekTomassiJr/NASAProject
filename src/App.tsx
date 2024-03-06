import React from 'react';
import Navbar from "./components/Navbar";
import Query from "./pages/Query";
import Report from "./pages/Report";
import Reports from "./pages/Reports";
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={ <Query /> } />
            <Route path="/query" element={ <Query /> } />
            <Route path="/report" element={ <Report /> } />
            <Route path="/reports" element={ <Reports /> } />
          </Routes>
        </div>
      </>
  );
}

export default App;
