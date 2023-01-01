import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bags from "./Components/Bags";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Shoes from "./Components/Shoes";
import BagsForm from "./Components/BagsForm";
import ShoesForm from "./Components/ShoesForm";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import SignUp from "./Components/SignUp";
function App() {
  const [condition, setCondition] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="align">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/bags" element={<Bags />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/bagsform" element={<BagsForm />} />
            <Route path="/shoesform" element={<ShoesForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
        
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
