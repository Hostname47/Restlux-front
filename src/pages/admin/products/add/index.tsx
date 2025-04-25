import { useState } from "react";
import AdminLayout from "../../../../layout/admin";
import "./styles.css";
import image from "../../../../assets/images/grayImage.webp";

function AdminAddProductPage() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [tag, settag] = useState("");
  const [category, setcategory] = useState("");
  const [discount, setdiscount] = useState(0);
  const [quantity, setquantity] = useState();
  const [Image, setImage] = useState(image);
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const myimage = URL.createObjectURL(file);
      setImage(myimage);
    }
  };

  return (
    <AdminLayout>
      <div className="card">
        <div className="left">
          <div className="inputs">
            <label htmlFor="title">
              Title <span className="red">*</span>
            </label>
            <input
              type="text"
              name=""
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
          </div>
          <p></p>
          <div className="inputs">
            <label htmlFor="description">
              Description <span className="red">*</span>
            </label>
            <textarea name="" id="description" placeholder="Description">
              {description}
            </textarea>
          </div>
          <div className="inputs">
            <label htmlFor="price">
              Price <span className="red">*</span>
            </label>
            <input
              type="number"
              name=""
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
          </div>
          <div className="inputs">
            <label htmlFor="tag">
              Tags <span className="red">*</span>
            </label>
            <input
              type="text"
              name=""
              id="tag"
              placeholder="Tags"
              value={tag}
              onChange={(e) => settag(e.target.value)}
            />
          </div>

          <div className="inputs">
            <label htmlFor="category">
              category <span className="red">*</span>
            </label>
            <select
              name=""
              id="category"
              defaultValue={category}
              onChange={(e) => e.target.value}
            >
              <option value="regular">Regular</option>
              <option value="delux">Delux</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div className="inputs">
            <label htmlFor="discount">Discount </label>
            <input
              type="number"
              name=""
              id="discount"
              step={0.1}
              placeholder="Discount"
              value={discount}
              onChange={(e) => {
                setdiscount(e.target.value);
              }}
            />
          </div>
          <div className="inputs">
            <label htmlFor="quantity">
              Quantity <span className="red">*</span>
            </label>
            <input
              type="number"
              name=""
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => {
                setquantity(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="right">
          <div className="inputs">
            <label htmlFor="image">
              image <span className="red">*</span>
            </label>

            <input type="file" accept="image/*" onChange={handleImage} />
            <img src={Image} alt="this is a picture" />
          </div>
          <input type="submit" name="" value="Add" id="Add" />
        </div>
      </div>
    </AdminLayout>
  );
}
export default AdminAddProductPage;
