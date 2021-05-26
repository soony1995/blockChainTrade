import React from "react";
import { useState } from "react";

const Enroll = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !title ||
      !price ||
      !quantity ||
      !location ||
      !description ||
      !category
    ) {
      alert("작성하지 않은 항목이 있습니다.");
      return;
    }

    onAdd({ title, price, quantity, location, description, category });

    setTitle("");
    setPrice("");
    setLocation("");
    setDescription("");
    setQuantity("");
    setCategory("");
    alert("등록이 완료 되었습니다.");
    window.location.href = "http://localhost:3000/";
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="w-3/4 m-auto h-20 h-1/6 m-0 border-4 p-4  ">
        <div>
          <label>title</label>
          <input
            className="ml-10 border-2"
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label> price</label>
          <input
            className="ml-10 border-2"
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div>
          <label> quantity</label>
          <input
            className="ml-10 border-2"
            type="text"
            placeholder="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div>
          <label> location</label>
          <input
            className="ml-10 border-2"
            type="text"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div>
          <label> categories</label>
          <input
            className="ml-10 border-2"
            type="text"
            placeholder="categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label> description</label>
          <input
            border
            className="ml-10 border-2"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div>
            <input
              className="font-mono font-extrabold bg-blue-400 bg-opacity-100 focus:outline-black"
              type="submit"
              value="등록하기"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Enroll;
