import { useState } from "react";
import AdminLayout from "../../../../layout/admin";
import "./styles.css"
import image from "../../../../assets/images/grayImage.webp"

function AdminAddProductPage(){

    const defaultImage = image;
  const [imagePreview, setImagePreview] = useState(defaultImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

    return <AdminLayout>
        
            <div className="card">
                <div className="left">
                <h1>Add Product</h1>
                <div className="inputs">
                <label htmlFor="title">Title <span   className="red">*</span></label>
                <input type="text" name="" id="title" placeholder="Title"/>
                </div>
                <p></p>
                <div className="inputs">
                <label htmlFor="description">Description <span  className="red">*</span></label>
                <textarea name="" id="description" placeholder="Description"></textarea>
                </div>
                <div className="inputs">
                <label htmlFor="price">Price <span className="red">*</span ></label>
                <input type="number" name="" id="price" placeholder="Price"/>
                </div>
                <div className="inputs">
                <label htmlFor="tag">Tags <span className="red">*</span></label>
                <input type="text" name="" id="tag" placeholder="Tags" />
                </div>

                <div className="inputs">
                <label htmlFor="category">category <span className="red">*</span></label>
                <select name="" id="category">
                    <option value="regular">Regular</option>
                    <option value="delux">Delux</option>
                    <option value="business">Business</option>
                </select>
                </div>
                <div className="inputs">
                <label htmlFor="discount" >Discount </label>
                <input type="number" name="" id="discount" step={0.1} placeholder="Discount"/>
                </div>
                <div className="inputs">
                <label htmlFor="quantity">Quantity <span className="red">*</span></label>
                <input type="number" name="" id="quantity" placeholder="Quantity" />
                </div>
                </div>


                <div className="right">
                <div className="inputs">
                <label htmlFor="image">image <span className="red">*</span></label>
                
                 <input
                 type="file"
                 accept="image/*"
                 onChange={handleImageChange}
                />
                 <img
                 src={imagePreview}
                 alt="this is a picture"
        
                />
                </div>
                <input type="submit" name="" value="Add"  id="Add"/>
                </div>
                

                

            </div>
       
    </AdminLayout>
}
export default AdminAddProductPage;