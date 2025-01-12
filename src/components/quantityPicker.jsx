import { useState } from "react";
import "./styles/quantityPicker.css";

function QuantityPicker(){
    const [quantity, setQuantity]=useState(1);

    function increase(){
        let value=quantity+1; // the setter is not immediate, will take some time
        if (quantity>=10) return;
        
        setQuantity(value);
    }

    function decrease(){
        let value=quantity-1;

        if (quantity===1) return;
        setQuantity(value);
        /*if (value>=1){
        setQuantity(value);
        }*/

    }




    return(
        <div className="qt-picker">
            <button className="btn btn-dark" disabled={quantity===1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-dark" disabled={quantity===10}  onClick={increase}>+</button>

        </div>
    )
}

export default QuantityPicker;