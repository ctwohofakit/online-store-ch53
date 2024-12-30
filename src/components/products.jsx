import "./styles/products.css";
import 'bootstrap/dist/css/bootstrap.css';

function Products(){
    return(
        <div class="productLine">
            <div class="productItem">
            <img class="product-img" src="./blush.jpg" alt="blush"></img>
                <div>
                <h3> Momo Blush</h3>
                <p>seven color selection</p>
                    <p class="price">$ 20</p>
                <p class="product-content">Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod facere deleniti possimus repudiandae ipsum beatae repellendus ullam ab at expeditar</p>
                </div>
                
                <div>
                <a href="#"><button class="btn btn-dark">Buy Now</button></a>
                </div>
        </div>
        <div class="productItem">
            <img class="product-img" src="./lip.jpg" alt="lipstick"></img>
                <div>
                <h3> Momo Lipstick</h3>
                <p>seven color selection</p>
                    <p class="price">$ 8</p>
                <p class="product-content">Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod facere deleniti possimus repudiandae ipsum beatae repellendus ullam ab at expeditar</p>
                </div>
                
                <div>
                <a href="#"><button class="btn btn-dark">Buy Now</button></a>
                </div>
        </div>

        <div class="productItem">
            <img class="product-img" src="./mascara.jpg" alt="mascara"></img>
                <div>
                <h3> Momo Mascara</h3>
                <p>seven color selection</p>
                    <p class="price">$ 15</p>
                <p class="product-content">Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod facere deleniti possimus repudiandae ipsum beatae repellendus ullam ab at expeditar</p>
                </div>
                
                <div>
                <a href="#"><button class="btn btn-dark">Buy Now</button></a>
                </div>
        </div>

        </div>
        
    );
}

export default Products;