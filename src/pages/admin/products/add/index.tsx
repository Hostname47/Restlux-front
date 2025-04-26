import { useState } from "react";
import AdminLayout from "../../../../layout/admin";
import "./styles.css";
import image from "../../../../assets/images/grayImage.webp";
import FormMessage from "../../../../components/form-message";

function AdminAddProductPage() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [tag, settag] = useState("");
  const [category, setcategory] = useState("");
  const [discount, setdiscount] = useState(0);
  const [quantity, setquantity] = useState("");
  const [Image, setImage] = useState(image);
  const [error, setError] = useState("");
  const [slug, setSlug] = useState("");
  const [showslug, setshowslug] = useState(false);
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const myimage = URL.createObjectURL(file);
      setImage(myimage);
    }
  };
  function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-"); // collapse dashes

    return str;
  }

  const handleFrom = (e) => {
    e.preventDefault();
    if (title.trim() == "") {
      setError("Title field is required");
      return;
    }
    if (!/^[A-Za-z ]{3,50}$/.test(title.trim())) {
      setError(
        "Product title must be 3-50 letters long and contain only letters and spaces."
      );
      return;
    }
    if (description.trim() == "") {
      setError("Description field is required");
      return;
    }
    if (price == "") {
      setError("Price field is required");
      return;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(price)) {
      setError("Product price must be a number with up to two decimal places");
      return;
    }
    if (tag.trim() == "") {
      setError("Tag field is required");
      return;
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(tag.trim())) {
      setError(
        "Product tag must use only letters, numbers, underscores (_), or hyphens (-)."
      );
      return;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(discount)) {
      setError(
        "Product discount must be a number with up to two decimal places"
      );
      return;
    }
    if (quantity == "") {
      setError("Quantity field is required");
      return;
    }
    if (!/^[0-9]+$/.test(quantity)) {
      setError("Product quantity must be a number ");
      return;
    }
    setError("");
  };

  return (
    <AdminLayout>
      <form action="">
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
                  setSlug(string_to_slug(e.target.value));
                  if (e.target.value.length > 0) {
                    setshowslug(true);
                  } else {
                    setshowslug(false);
                  }
                }}
              />
            </div>
            <div className={`inputs ${!showslug ? "hide" : ""}`}>
              <label htmlFor="slug">Slug</label>
              <p id="slug">{slug}</p>
            </div>
            <div className="inputs">
              <label htmlFor="description">
                Description <span className="red">*</span>
              </label>
              <textarea
                name=""
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              ></textarea>
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
                value={category}
                onChange={(e) => setcategory(e.target.value)}
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
                  setdiscount(
                    e.target.value === "" ? 0 : parseFloat(e.target.value)
                  );
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
            <input
              type="submit"
              name=""
              value="Add"
              id="Add"
              onClick={handleFrom}
            />
            <FormMessage
              content={error}
              showCloseButton
              onCloseButtonClick={() => setError("")}
              color="red"
              styles={{
                marginTop: 50,
                backgroundColor: "#ffe5e5",
                marginLeft: 40,
                paddingLeft: 25,
                paddingRight: 10,
              }}
            />
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}
export default AdminAddProductPage;
