import logo from './logo.svg'; 
import './App.css';
import Navbar from './components/navbar';
import Footermenu from './components/footer';
import Products from "./components/products";
import CatalogPage from './components/catalog';

function App() {
  return (

    <div className="App">
    <Navbar></Navbar>
    <h1>New Arrival From Momo</h1>
    <Products></Products>
    <Footermenu></Footermenu>
    
    </div>


  );
}

export default App;
