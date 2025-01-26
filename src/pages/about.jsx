import "./styles/about.css";
import 'bootstrap/dist/css/bootstrap.css';

function About(){
    return(
    <div className="aboutItem page">
        <img src="./images/banner.png"></img>
        <h1>About Us</h1>
        <h4 className="aboutItem-p">LLorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis consectetur explicabo debitis accusantium iste, tempore quidem fugiat illo ad ipsum nulla soluta nemo iure voluptate. Nemo eligendi voluptatibus perspiciatis itaqueorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis consectetur explicabo debitis accusantium iste, tempore quidem fugiat illo ad ipsum nulla soluta nemo iure voluptate. Nemo eligendi voluptatibus perspiciatis itaque.Reiciendis consectetur explicabo debitis accusantium iste, tempore quidem fugiat illo ad ipsum nulla soluta nemo iure voluptate. Nemo eligendi voluptatibus perspiciatis itaque.</h4>

        <div class="about-content">
            <div>
                <img className="about-txt-img" src="./images/eye.jpg"></img>
            </div>
            <div className="about-txt"> 
                <h2>Color Wonder</h2>
                <p>Sapiente fugit sed provident maxime culpa ipsam fuga quaerat blanditiis consequatur? Sunt ad dolorem cumque temporibus vitae suscipit ducimus nobis mollitia quia fugit sed provident maxime culpa ipsam fuga quaerat blanditiis consequatur? Sunt ad dolorem cumque temporibus vitae suscipit ducimus nobis mollitia quia Sunt ad dolorem cumque temporibus vitae suscipit ducimus nobis mollitia quia fugit sed provident maxime culpa ipsam fuga quaerat blanditiis consequatur? Sunt ad dolorem cumque temporibus vitae suscipit ducimus nobis mollitia quia.</p>
            </div>
        </div>
        
        <div class="about-content">

            <div className="about-txt"> 
                <h2>Netural Shine</h2>
                <p>Sapiente fugit sed provident maxime culpa ipsam fuga quaerat blanditiis consequatur? Sunt ad dolorem cumque temporibus vitae suscipit ducimus nobis mollitia quia fugit sed provident maxime culpa ipsam fuga quaerat blanditiis consequatur? Sunt ad dolorem cumque temporibus vitae suscipit ducimus nobis mollitia quia Sunt ad dolorem cumque temporibus vitae suscipit ducimus nobis mollitia quia fugit sed provident maxime culpa ipsam fuga quaerat blanditiis consequatur? Sunt ad dolorem cumque temporibus vitae suscipit ducimus nobis mollitia quia.</p>
            </div>
            <div>
                <img className="about-txt-img" src="./images/lip.jpg"></img>
            </div>
        </div>
    </div>
        

        
    );
}

export default About;