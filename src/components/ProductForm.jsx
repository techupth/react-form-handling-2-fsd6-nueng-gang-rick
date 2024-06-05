import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let newFormData = {
      name: name,
      image: image,
      price: price,
      description: description,
    };

    alert(JSON.stringify(newFormData, null, 2));

    setName("");
    setImage("");
    setPrice("");
    setDescription("");
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={handleNameChange}
            value={name}
          />
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="image">
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={handleImageChange}
            value={image}
          />
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={handlePriceChange}
            value={price}
          />
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Enter description here"
            onChange={handleDescriptionChange}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
