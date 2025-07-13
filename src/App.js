import Header from './header.js' 
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import ReactDOM from "react-dom/client";
import Slider from './slider.js'
import Home from './pages/home.js';
import New from './pages/new.js';
import Login from './pages/Login.js';

function Todolist() {
return (
    <div>
  <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<New />} />
          <Route path="/contact" element={<Login />} />
        </Routes>
      </BrowserRouter>
  <Slider/>
</div>
);
}

export default Todolist;
