import React, { useContext, useState } from "react";
import { myContext } from "../Context";
import { Link } from "react-router-dom";

export default function Admin() {
  const { shoes, setShoes } = useContext(myContext);
  const [newProduct, setNewProduct] = useState({ name: "", brand: "", img: "" });
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addProduct = () => {
    if (editIndex !== null) {
      // Editing existing product
      setShoes((prevShoes) => {
        const updatedShoes = [...prevShoes];
        updatedShoes[editIndex] = newProduct;
        return updatedShoes;
      });
      setEditIndex(null);
    } else {
      // Adding new product
      setShoes((prevShoes) => [...prevShoes, newProduct]);
    }

    setNewProduct({ name: "", brand: "", img: "" });
    setShowForm(false);
  };

  const editProduct = (index) => {
    setNewProduct(shoes[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setShowForm(false);
  };

  return (
    <div>
        <Link to={"/shoes"}>Shoes</Link>
      <div className="container">

        <button onClick={() => setShowForm(true)}>Add Product</button>
        {showForm && (
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
            </label>
            <label>
              Brand:
              <input
                type="text"
                name="brand"
                value={newProduct.brand}
                onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
              />
            </label>
            <label>
              Image URL:
              <input
                type="text"
                name="img"
                value={newProduct.img}
                onChange={(e) => setNewProduct({ ...newProduct, img: e.target.value })}
              />
            </label>
            <button type="button" onClick={addProduct}>
              {editIndex !== null ? "Save" : "Add"}
            </button>
            {editIndex !== null && <button type="button" onClick={cancelEdit}>Cancel</button>}
          </form>
        )}
        {shoes.map((data, index) => (
          <div key={index}>
            <img src={data.img} alt="img" />
            <h1>{data.name}</h1>
            <h3>Brand: {data.brand}</h3>
            <button onClick={() => editProduct(index)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}
