import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout  from './pages/layout';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Layout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
