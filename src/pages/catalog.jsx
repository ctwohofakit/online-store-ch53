import Products from "../components/products";
import "./styles/catalog.css";
import { useState } from "react";

const dummyData =[
    {
        "title": "Ana Lip Gloss",
        "category": "Lip",
        "price": 13.99,
        "image": "./images/lip.jpg",
        "_id": "02L"
    },
    {
        "title": "Sun Blush",
        "category": "Face",
        "price": 15.49,
        "image": "./images/blush.jpg",
        "_id": "01F"
    },
    {
        "title": "Silk Black Mascara",
        "category": "Eyes",
        "price": 18.99,
        "image": "./images/mascara.jpg",
        "_id": "01M"
    },
    {
        "title": "Vet Lip Gloss",
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
    {
        "title": "Utra Dark Eyeliner",
        "category": "Eyes",
        "price": 9.99,
        "image": "./images/liner.jpg",
        "_id": "02B"
    },
    {
        "title": "Netural Brown Eye Shadow",
        "category": "Eyes",
        "price": 17.55,
        "image": "./images/eye2.jpg",
        "_id": "02L"
    },
    {
        "title": "Rose Lipstick",
        "category": "Lip",
        "price": 16.88,
        "image": "./images/lip2.jpg",
        "_id": "02E"
    },
    {
        "title": "Lobby Brown Eye Shadow",
        "category": "Eyes",
        "price": 25.60,
        "image": "./images/neutraleye.jpg",
        "_id": "02M"
    },
    {
        "title": "Peach Pink Blush",
        "category": "Face",
        "price": 13.50,
        "image": "./images/peachBlush.jpg",
        "_id": "03L"
    },
    {
        "title": "Perfect Lip liner",
        "category": "Lip",
        "price": 8.87,
        "image": "./images/lipliner.jpg",
        "_id": "02F"
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