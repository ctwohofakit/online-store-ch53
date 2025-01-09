import "./styles/admin.css";
import 'bootstrap/dist/css/bootstrap.css';

function Admin(){
    return(
    <div className="admin page">
        <h1>ADMIN PANEL</h1>
    
        <div className="admin-wrapper">

            <div className="register-product nice-form">
                <h3>Register Product</h3>
                <form>
                <div className="mb-3">
                    <label for="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="image" className="form-label">Image:</label>
                    <input type="text" className="form-control" id="image" />
                </div>
                <div className="mb-3">
                    <label for="price" className="form-label">Price:</label>
                    <input type="text" className="form-control" id="price" />
                </div>
                <div className="mb-3">
                    <label for="cate" className="form-label">Category:</label>
                    <input type="text" className="form-control" id="cate" />
                </div>
                <div className="save-button">
                <button type="save-product" className="btn btn-outline-info">Save Product</button>
                </div>
                </form>

            </div>

            <div className="register-coupon nice-form">
                <h3>Register Coupon</h3>
                <form>
                <div className="mb-3">
                    <label for="code" className="form-label">Code:</label>
                    <input type="text" className="form-control" id="code" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="discount" className="form-label">Discount:</label>
                    <input type="text" className="form-control" id="discount" />
                </div>
                <div className="save-button">
                <button type="save" className="btn btn-outline-info">Save Coupon</button>
                </div>
                </form>
            </div>
        </div>
    
    </div>
    );
}




export default Admin;