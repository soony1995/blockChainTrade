import { useState } from "react";

const Enroll = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  // 전송
  const onSubmit = async (e) => {
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

    onAdd({
      title,
      price,
      quantity,
      location,
      description,
      category,
    });

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
      <div className="w-3/4 m-auto h-full m-0 p-2   ">
        <div className="p-6 pl-20">
          <label className="not-italic font-extrabold ">제목 : </label>
          <input
            className="ml-10 border-2 h-14 w-3/4 "
            type="text"
            placeholder="제목 "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="p-6 pl-20">
          <label className="not-italic font-extrabold"> 가격 : </label>
          <input
            className="ml-10 border-2 h-14 w-3/4 "
            type="number"
            placeholder="가격"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="p-6 pl-20">
          <label className="not-italic font-extrabold"> 수량 : </label>
          <input
            className="ml-10 border-2 h-14 w-3/4 "
            type="number"
            placeholder="수량"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="p-6 pl-20">
          <label className="not-italic font-extrabold"> 지역 : </label>
          <input
            className="ml-10 border-2 h-14 w-3/4 "
            type="text"
            placeholder="지역"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="p-6 pl-20">
          <label className="not-italic font-extrabold">카테고리 :</label>
          <input
            className="ml-10 border-2 h-14 w-3/4 "
            type="text"
            placeholder="카테고리"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="p-6 pl-20">
          <label className="not-italic font-extrabold"> 설명 : </label>
          <input
            border
            className="ml-10 border-2 h-14 w-3/4 "
            type="text"
            placeholder="설명"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-end ">
          <button
            className="not-italic font-extrabold bg-gray-200 rounded-lg p-5"
            type="submit"
          >
            등록하기
          </button>
        </div>
      </div>
    </form>
  );
};

export default Enroll;
