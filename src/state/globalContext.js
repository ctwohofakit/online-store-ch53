import {createContext} from "react";

/**
 * The context is a blueprint/description
 * of the data that will be store on it
 * No implementation is allowed here
 */

const GlobalContext= createContext({
    cart:[], //this varible are inmutable
    user:{},

    addProuctToCart:()=>{}, //this is bluePrint only, function will be created elsewhere
    clearCart:()=>{},
    removeProductFromCart:()=>{}


});


export default GlobalContext;