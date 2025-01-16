import { useContext, useState } from "react";
import QuantityPicker from "./quantityPicker";
import "./styles/products.css";
import 'bootstrap/dist/css/bootstrap.css';
import GlobalContext from "../state/globalContext";



function Products(props){
    const globalAdd = useContext(GlobalContext).addProductToCart;//add to cart var global
    const [quantity, setQuantity]=useState(1);//


    function onAdd(){
        let fixedProduct={...props.data};
        fixedProduct.quantity=quantity;
        globalAdd(fixedProduct);//global function call
    }

    function handleQt(qty){
        setQuantity(qty);//
    }


    return(
    <div className="product-set">
    <div className="productItem">
        <img className="product-img" src={props.data.image} alt="blush"></img>
        <div>
        <h3> {props.data.title} </h3>
        <p>{props.data.category}</p>

            <div className="parent">
                <label>$ {(props.data.price*quantity).toFixed(2)}</label>
                <label className="price">$ {props.data.price.toFixed(2)}</label>
            </div>
            <div className="parent">
                <QuantityPicker onChange={handleQt} />

                <button  className="btn btn-dark btn-sm" onClick={onAdd}>Add</button>
            </div>
        </div>
    </div>
    </div>
        

        
    );
}

export default Products;