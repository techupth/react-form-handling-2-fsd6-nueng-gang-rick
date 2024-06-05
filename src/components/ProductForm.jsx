import { useState } from "react";
function ProductForm() {
  let [name,setName] =useState("")
  let [price,setPrice]=useState("")
  let [img,setImg]=useState("")
  let [description,setDescription]=useState("")
  let change = ()=>{
    let data ={
      name: name,
      price: price,
      img:img,
      description:description
    }
    alert(JSON.stringify(data))
  }
  return (
    <form className="post-form" onSubmit={change}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(event)=>{
              setName(event.target.value)
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={img}
            onChange={(event)=>{
              setImg(event.target.value)
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(event)=>{
              setPrice(event.target.value)
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event)=>{
              setDescription(event.target.value)
            }}
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
