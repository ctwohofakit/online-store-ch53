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

    </div>
        

        
    );
}

export default Home;