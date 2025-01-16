import "./styles/navbar.css";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import GlobalContext from "../state/globalContext";

function Navbar(){
    const user=useContext(GlobalContext).user;//create var to get user from createContext 
    const cart=useContext(GlobalContext).cart;//create var to get cart from createContex

return(
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark" >
    <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="./images/velvetLogo.png"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
        <li className="nav-item">
            <Link to="/" className="nav-link fs-5 fw-bold" aria-current="page" >Home
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/catalog" className="nav-link fs-5 fw-bold" >Catalog</Link>
        </li>
        <li className="nav-item">
            <Link to="/about"className="nav-link fs-5 fw-bold" >About</Link>
        </li>
        <li className="nav-item">
            <Link to="/admin"className="nav-link fs-5 fw-bold" >Admin</Link>
        </li>
        </ul>


        <div className="d-flex">
            <button className="btn btn-outline-primary fw-bold" >{user.name}</button>
            <Link to="/cart"className="btn btn-outline-light">
            <span className="badge text-bg-primary">{cart.length}</span>View Cart
            </Link>
        </div>
    </div>
    </div>
    </nav>

);
}

export default Navbar;