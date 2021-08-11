import React, { useState } from "react";
import Header from "./Header";

function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function addProducts() {
    // console.warn(name, file, price, description);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    formData.append("price", price);
    formData.append("description", description);

    let result = await fetch("http://localhost:8000/api/addProduct", {
      method: "POST",
      body: formData,
    });
    if (result) {
      console.log("resultnya :", result);
    }
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <br />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="form-control mt-2"
          placeholder="Name"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="form-control mt-2"
          placeholder="File"
        />
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          className="form-control mt-2"
          placeholder="Price"
        />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          className="form-control mt-2"
          placeholder="Description"
        />
        <button onClick={addProducts} className="btn btn-primary mt-2">
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
