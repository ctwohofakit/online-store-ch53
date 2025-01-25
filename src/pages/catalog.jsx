import Products from "../components/products";
import dataService from "../service/dataService";
import "./styles/catalog.css";
import { useEffect, useState } from "react";


function CatalogPage(){
    const [allProducts, setAllProducts]=useState([]);
    const [allCategories, setAllCategories]=useState([]);
    const [selectedCategory, setSelectedCategory]=useState("");

    function loadData(){
        const prods=dataService.getProducts();
        const cate=dataService.getCatergory();
        setAllProducts(prods);
        setAllCategories(cate);
    }

    //do somthing when something loads
    useEffect(function(){
        loadData();
    },[]);

    function handleCategory(cate){
        setSelectedCategory(cate);
        console.log("clicked",cate);
    }

    function displayAll(){
        setSelectedCategory("");
        console.log("clicked empty");
    }


    return(
        <div className="catalog page">
            <h1>Check out our amazing catalog!</h1>
            <div className="cat-wrapper">
            <div className="cat">
            <button className="btn btn-primary"onClick={displayAll}>All</button>
            {
                //onClick function in react is imediate call, so using the outter function call ()=>{}, so the parameter can passed to the funciotn
                allCategories.map(cate=><button className="btn btn-dark" onClick={()=>handleCategory(cate)}> {cate}</button>)
            }
            </div> 
            </div>

            <div className="productLine">
            {
                allProducts.filter(prod=>prod.category===selectedCategory||!selectedCategory).map(prod=><Products data={prod} />)
            }
            </div>

        </div>
    );
}

export default CatalogPage;