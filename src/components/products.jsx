import QuantityPicker from "./quantityPicker";
import "./styles/products.css";
import 'bootstrap/dist/css/bootstrap.css';

function Products(props){
    return(
    <div className="product-set">
    <div className="productItem">
        <img className="product-img" src={props.data.image} alt="blush"></img>
        <div>
        <h3> {props.data.title} </h3>
        <p>{props.data.category}</p>

            <div className="parent">
                <label>$99.99</label>
                <label className="price">${props.data.price}</label>
            </div>
            <QuantityPicker />

        </div>
        <br></br>
        <div>
        <a href="#"><button className="btn btn-dark btn-lg">Add to cart</button></a>
        </div>
    </div>
    </div>
        

        
    );
}

export default Products;