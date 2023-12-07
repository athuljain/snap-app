import { useState, useContext } from "react";
import { myContext } from "../Context";

export default function EditProducts() {
  const { shoes, setShoes } = useContext(myContext);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedBrand, setEditedBrand] = useState("");

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedName(shoes[index].name);
    setEditedBrand(shoes[index].brand);
  };

  const handleSaveClick = (index) => {
    const updatedShoes = [...shoes];
    updatedShoes[index] = { ...updatedShoes[index], name: editedName, brand: editedBrand };
    setShoes(updatedShoes);
    setEditIndex(null);
  };

  return (
    <div>
      {shoes.map((data, index) => (
        <div key={index}>
          {editIndex === index ? (
            <div>
              <label>
                Name:
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              </label>
              <label>
                Brand:
                <input
                  type="text"
                  value={editedBrand}
                  onChange={(e) => setEditedBrand(e.target.value)}
                />
              </label>
              <button onClick={() => handleSaveClick(index)}>Save</button>
            </div>
          ) : (
            <div>
              <img src={data.img} alt="img" />
              <h1>{data.name}</h1>
              <h3>Brand: {data.brand}</h3>
              <button onClick={() => handleEditClick(index)}>Edit Product</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
