const dummyData =[
    {
        "title": "Ana Lip Gloss",
        "category": "Lip",
        "price": 13.99,
        "image": "./images/Velvetlip.jpg",
        "_id": "02L"
    },
    {
        "title": "Vel Hair Repair ",
        "category": "Hair",
        "price": 26.89,
        "image": "./images/hair-action.jpg",
        "_id": "01h"
    },
    {
        "title": "Long Hold Hair Gel",
        "category": "Hair",
        "price": 12.99,
        "image": "./images/hairGel.jpg",
        "_id": "02h"
    },
    {
        "title": "Hair Make Up",
        "category": "Hair",
        "price": 15.23,
        "image": "./images/hair-makeup.jpg",
        "_id": "03h"
    },
    {
        "title": "Vel Hair Power",
        "category": "Hair",
        "price": 13.99,
        "image": "./images/hair-powder.jpg",
        "_id": "04h"
    },
    {
        "title": "Ana Hair Spray",
        "category": "Hair",
        "price": 16.77,
        "image": "./images/hairSpray.jpg",
        "_id": "05h"
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

const dummyCategories=["Face","Eyes","Lip","Hair"];

class DataService{

    getProducts(){
        //TODO: call the server to get the prods

        return dummyData;
    }
    getCatergory(){
        //TODO: call the server to get the prods

        return dummyCategories;
    }

    saveProducts(){

    }

}

export default new DataService();