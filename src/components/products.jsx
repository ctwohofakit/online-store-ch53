import QuantityPicker from "./quantityPicker";
import "./styles/products.css";
import 'bootstrap/dist/css/bootstrap.css';

function Products(){
    return(

    <div className="productItem">
        <img className="product-img" src="./blush.jpg" alt="blush"></img>
        <div>
        <h3> Momo Blush</h3>
        <p>seven color selection</p>
        <p className="product-content">ipsum beatae ipsum beatae repellendus ullamrepellendus ullam ab at expeditar</p>

            <label className="price">$20</label>
            <label className="price">$20</label>
            <QuantityPicker />
        </div>
        <br></br>
        <div>
        <a href="#"><button className="btn btn-dark">Add to cart</button></a>
        </div>
    </div>
        

        
    );
}

export default Products;