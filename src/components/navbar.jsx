import "./styles/navbar.css";
import CatalogPage from './catalog';

function Navbar(){
    return(
        <div>
            <nav>
                <div className="navbar-menu">
                    <a href="">Log In</a>
                    <a href="">Search</a>
                    <a href="">Subscribe</a>
                    <a href="./catalog">Catalog</a>
                    <a href="">Menu</a>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;