import { useState } from "react";
import "./styles/quantityPicker.css";

function QuantityPicker(props){//pass the props for qty
    const [quantity, setQuantity]=useState(1);


    function increase(){
        let value=quantity+1; // the setter is not immediate, will take some time
        if (quantity>=10) return;
        setQuantity(value);
        props.onChange(value);
    }

    function decrease(){
        if (quantity===1) return;
        let value=quantity-1;
        setQuantity(value);
        /*if (value>=1){
        setQuantity(value);
        }*/
        props.onChange(value);
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