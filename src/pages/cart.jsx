import "./styles/cart.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useContext, useState } from "react";
import GlobalContext from "../state/globalContext";

function Cart(){
    const cart= useContext(GlobalContext).cart;

    return(
        <div>
            <nav>
                <div className="cart page">
                    <h1>Ready to complete the purchase?</h1>
                    <h3>Your have {cart.length} products in your cart</h3>

                    <div className="list">
                        <ul>
                        {cart.map(prod =>
                            <li className="cart-prod">
                                <img src={prod.image} alt=""></img>
                                <h6>{prod.title}</h6>
                                <label>QTY: #{prod.quantity}</label>
                                <label>Price: ${prod.price.toFixed(2)}</label>
                                <label>${(prod.price*prod.quantity).toFixed(2)}
                                <button className="btn btn-danger">Remove</button>
                                </label>
                            </li>)}
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>

    );
}



export default Cart;