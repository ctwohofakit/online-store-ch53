import Products from "../components/products";
import "./styles/catalog.css";
import { useState } from "react";

const dummyData =[
    {
        "title": "Lipstick",
        "category": "Lip",
        "price": 13.99,
        "image": "./images/lip.jpg",
        "_id": "02L"
    },
    {
        "title": "Blush",
        "category": "Face",
        "price": 15.49,
        "image": "./images/blush.jpg",
        "_id": "01F"
    },
    {
        "title": "Mascara",
        "category": "Eyes",
        "price": 18.99,
        "image": "./images/mascara.jpg",
        "_id": "01M"
    },
    {
        "title": "Lip Tint",
        "category": "Lip",
        "price": 11.87,
        "image": "./images/tint.png",
        "_id": "1tint"
    },
    {
        "title": "Consealer Paletter",
        "category": "Face",
        "price": 17.8,
        "image": "./images/Concealer.png",
        "_id": "01C"
    },
    {
        "title": "Purple Eye Shadow",
        "category": "Eyes",
        "price": 23.995,
        "image": "./images/EyeShadow.png",
        "_id": "01E"
    },

]

const dummyCategories=["Face","Eye","Skin","Lip","Hair"];

function CatalogPage(){
    const [allProducts, setAllProducts]=useState(dummyData);
    const [allCategories, setAllCategories]=useState(dummyCategories);


    return(
        <div className="catalog page">
            <h1>Check out our amazing catalog!</h1>
            {/* <div class="cat">
            {
                allCategories.map(cate=><button className="btn btn-dark"> {cate}</button>)
            }
            </div> */}

            <div className="productLine">
            {
                allProducts.map(prod=><Products data={prod} />)
            }
            </div>
        </div>
    );
}

export default CatalogPage;