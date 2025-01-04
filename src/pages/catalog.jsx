import Products from "../components/products";
import "./styles/catalog.css";

function CatalogPage(){
    return(
        <div className="catalog page">
            <h1>Check out our amazing catalog!</h1>   
            <div className="productLine">
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            </div>
        </div>
    );
}

export default CatalogPage;