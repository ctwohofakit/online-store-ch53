import logo from './logo.svg'; 
import './App.css';
import Navbar from './components/navbar';
import Footermenu from './components/footer';
import Products from "./components/products";
import CatalogPage from './pages/catalog';
import Home from './pages/home';
import About from './pages/about';
import Admin from './pages/admin';
import Cart from './pages/cart';




import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalProvider from './state/globalProvider';


function App() {
  return (
    /* global wrapper for state management */
    <GlobalProvider> 
      <BrowserRouter>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        <Footermenu />
        
      </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

