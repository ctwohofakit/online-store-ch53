import logo from './logo.svg'; 
import './App.css';
import Navbar from './components/navbar';
import Footermenu from './components/footer';
import Products from "./components/products";
import CatalogPage from './pages/catalog';
import Home from './pages/home';
import About from './pages/about';
import Admin from './pages/admin';




import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footermenu />
      
    </div>
    </BrowserRouter>

  );
}

export default App;

