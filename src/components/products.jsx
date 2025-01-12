import QuantityPicker from "./quantityPicker";
import "./styles/products.css";
import 'bootstrap/dist/css/bootstrap.css';

function Products(props){
    function AddtoCart(){
        console.log("clicked");
    }

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
            <div className="parent">
                <QuantityPicker />
                <button  className="btn btn-dark btn-sm" onClick={AddtoCart}>Add</button>
            </div>
        </div>
    </div>
    </div>
        

        
    );
}

export default Products;