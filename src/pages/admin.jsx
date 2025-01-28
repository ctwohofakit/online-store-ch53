import "./styles/admin.css";
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState } from "react";
import dataService from "../service/dataService";
import axios from "axios";



function Admin(){
    //create a empty array to hold the coupons
    const [allCoupons, setAllCoupons]=useState([]);
    const [coupon, setCoupon]=useState({code:"", discount:""});
    // set as object {}, set ID with empty container ""

    //create a empty array to hold the products
    const [allProducts, setAllProducts]=useState([]);
    const [product, setProduct]=useState({ //set product useState
        title:"",
        image:"",
        price:"",
        catergory:"",
    })

    async function LoadData(){
        const prods =await dataService.getProducts();
        setAllProducts(prods);
    }

    useEffect(function(){
        LoadData();
    }, []);


    function handleCoupon(x){
        const text =x.target.value;
        const name =x.target.name;

        /*
            to modify state var that hold object or Array:
            -create a copy
            -modify the copy
            -set/sent the copy back
            ...spread operator
        */

        let copy={...coupon}; //create a copy that include everthing in "coupon", {} is object

        if (name==="code"){ //using if state to check if the data comesfrom "code" or discount
            copy.code=text;
        }else if (name==="discount"){
            copy.discount=text;
        }
        setCoupon(copy); //sent the copy back using setCoupon, it is also in the use state area
    }

    function saveCoupon(){
        console.log(coupon);



        // create an copy array
        let copy=[...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }


    function handleProduct(x){ //set a pass through parameter
        const text=x.target.value;
        const name=x.target.name;
        //the y.target.name becasue "2 types of vaule, in 4 different field" so set two vaule, 1 name 1 value

        let copy ={...product};
        if (name==="title"){
            copy.title=text;

        }else if (name==="image"){
            copy.image=text;

        }else if (name==="price"){
            copy.price=parseFloat(text);//parse text to number for server

        }else if (name==="catergory"){
            copy.catergory=text;
        }
        setProduct(copy);
    }

    async function saveProduct(){
        console.log(product); //dataservice->server

        //save to server
        let savePrduct =await dataService.saveProducts(product);
        let copy=[...allProducts];
        console.log("save:", savePrduct);

        copy.push(product);
        setAllProducts(copy);
    }


    //if <form>is used, the form will keep refresh the page, it will need any button add type="button"
    return(
    <div className="admin page">
        <h1>ADMIN PANEL</h1>
    
        <div className="admin-wrapper">

            <div className="register-product nice-form">
                <h3>Register Product</h3>

                <div className="mb-3">
                    <label className="form-label">Title:</label>
                    <input type="text" className="form-control" name="title" onBlur={handleProduct} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image:</label>
                    <input type="text" className="form-control"name="image" onBlur={handleProduct} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price:</label>
                    <input type="number" className="form-control" name="price" onBlur={handleProduct} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category:</label>
                    <input type="text" className="form-control"name="catergory" onBlur={handleProduct} />
                </div>
                <div className="save-button">
                <button className="btn btn-outline-info btn-lg" onClick={saveProduct}>Save Product</button>
                </div>
                <br></br>
                <ul>
                    {allProducts.map(pt=><li>{pt.title}- $ {pt.price}</li>)}
                </ul>

            </div>

            <div className="register-coupon nice-form">
                <h3>Register Coupon</h3>

                <div className="mb-3">
                    <label className="form-label">Code:</label>
                    <input type="text" className="form-control" name="code" onBlur={handleCoupon} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Discount:</label>
                    <input type="number" className="form-control" name="discount" onBlur={handleCoupon}/>
                </div>
                <div className="save-button">
                <button type="button" className="btn btn-outline-info btn-lg" onClick={saveCoupon}>Save Coupon</button>
                </div>
                <br></br>
                <ul>
                {allCoupons.map(cp=><li>{cp.code}-{cp.discount}%</li>)} 
                </ul>

            </div>
        </div>
    
    </div>
    );
}




export default Admin;