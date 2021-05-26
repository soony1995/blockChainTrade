import React from "react";

const Detail = ({ products, handleSend, deleteProduct }) => {
  const urlId = window.location.pathname.split("/").pop();
  const info = {
    category: "",
    description: "",
    id: "",
    location: "",
    price: "",
    quantity: "",
    title: "",
  };

  const getInfo = () => {
    products.forEach((element) => {
      if (element.id + "" === urlId) {
        return (
          (info.category = element.category),
          (info.description = element.description),
          (info.id = element.id),
          (info.location = element.location),
          (info.price = element.price),
          (info.quantity = element.quantity),
          (info.title = element.title)
        );
      }
    });
  };

  getInfo();

  return (
    <div>
      <div className="w-3/4 m-auto h-20 h-1/6 m-0 border-4   ">
        <div> 이름 : {info.title}</div>
        <div> 가격 : {info.price}</div>
        <div> 위치 : {info.location}</div>
        <div> 수량 : {info.quantity}</div>
        <div> 설명 : {info.description}</div>
        <button
          onClick={() => {
            handleSend(info.price);
          }}
        >
          구매하기{" "}
        </button>

        <button
          onClick={() => {
            deleteProduct(info.id);
            alert("삭제가 완료 되었습니다.");
          }}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};

export default Detail;
