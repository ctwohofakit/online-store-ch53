import "./styles/home.css";
import 'bootstrap/dist/css/bootstrap.css';
import Catalog from "./catalog";
import { Link } from 'react-router-dom';


function Home(){
    return(

    <div className="homeItem page">
        <div className="homeItem upper">
            <div className="homeItem hero-section">
                <div className="hero-text">
                    <div>
                    <h1>Velvet Collections</h1>
                    </div>
                    <div>
                    <p>Feeling Confident, Creative, Showcase Self-Expression</p>
                    </div>
                    <div className="cta-buttons">
                        <Link to="/catalog"><button className="btn btn-dark btn-lg">Go to Store</button></Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="./images/hero_img.png" alt="Velvet Collections Banner" />
                </div>
            </div>
        </div>

        <div className="announcement">
            <div className="marquee">
            <span>EXCLUSION OFFER</span>
            <span>UP TO 30% OFF</span>
            <span>SPRING COLLECTION</span>
            <span>EXCLUSION OFFER</span>
            <span>UP TO 30% OFF</span>
            <span>SPRING COLLECTION</span>
            <span>EXCLUSION OFFER</span>
            <span>UP TO 30% OFF</span>
            <span>SPRING COLLECTION</span>
            <span>EXCLUSION OFFER</span>
            <span>UP TO 30% OFF</span>
            </div>
            <div className="marquee">
            <span>EXCLUSION OFFER</span>
            <span>UP TO 30% OFF</span>
            <span>SPRING COLLECTION</span>
            <span>EXCLUSION OFFER</span>
            <span>UP TO 30% OFF</span>
            <span>SPRING COLLECTION</span>
            <span>EXCLUSION OFFER</span>
            <span>UP TO 30% OFF</span>
            <span>SPRING COLLECTION</span>
            <span>EXCLUSION OFFER</span>
            <span>UP TO 30% OFF</span>
            </div>
        </div>


        <div>
        <h1>Recent Popular</h1>
        <Catalog />
        </div>

        <div>
        <h1>Shop Our Catergories</h1>
            <div className="homeCard wrapper">
            <Link to="/catalog">
                <div className="card">
                    <img className="cardImage"src="./images/homeFace.png"></img>
                    <div className="cardContent">
                    <h3>FACE</h3>
                    <img className="cardIcon"src="./images/arrow.png"></img></div>
                </div>
            </Link>
            <Link to="/catalog">
                <div className="card">
                    <img className="cardImage"src="./images/homeHair.png"></img>
                    <div className="cardContent">
                    <h3>Hair</h3>
                    <img className="cardIcon"src="./images/arrow.png"></img></div>
                </div>
            </Link>
            <Link to="/catalog">
                <div className="card">
                    <img className="cardImage"src="./images/homeEye.png"></img>
                    <div className="cardContent">
                    <h3>Eyes</h3>
                    <img className="cardIcon"src="./images/arrow.png"></img></div>
                </div>
            </Link>
            <Link to="/catalog">
                <div className="card">
                    <img className="cardImage"src="./images/homeLip.png"></img>
                    <div className="cardContent">
                    <h3>Lip</h3>
                    <div>
                    <img className="cardIcon"src="./images/arrow.png"></img>
                    </div>
                    </div>
                </div>
            </Link>
            </div>
        </div>

    </div>
        

        
    );
}

export default Home;