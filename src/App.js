import logo from './logo.svg'; 
import './App.css';
import Navbar from './components/navbar';
import Footermenu from './components/footer';
import Products from "./components/products";
import CatalogPage from './pages/catalog';

function App() {
  return (

    <div className="App">
    <Navbar />
    <h1>New Arrival From Momo</h1>
    <CatalogPage />

    <Footermenu />
    
    </div>


  );
}

export default App;
