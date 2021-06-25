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
      <div className="w-3/4 m-auto h-96 m-0  ">
        <div className=" grid grid-cols-5 gap-4 pt-24">
          <div className=" flex justify-center row-span-5 col-span-2">
            {" "}
            이미지 들어갈 자리{" "}
          </div>
          <div className="col-span-2 p-6 not-italic font-extrabold">
            {" "}
            이름 : {info.title}
          </div>
          <div className="col-span-3 p-6 not-italic font-extrabold">
            {" "}
            가격 : {info.price} Eth
          </div>
          <div className=" p-6 not-italic font-extrabold">
            {" "}
            위치 : {info.location}
          </div>
          <div className="p-6 not-italic font-extrabold">
            {" "}
            수량 : {info.quantity}
          </div>
          <div className="col-span-3 p-6 pb-12 not-italic font-extrabold">
            {" "}
            설명 : {info.description}
          </div>
          <button
            className=" not-italic font-extrabold  rounded-lg bg-gray-400 h-10"
            onClick={() => {
              console.log("구매하기 버튼 클릭");
              handleSend(info.price);
            }}
          >
            구매하기{" "}
          </button>
          {info.id}
          <button
            className=" not-italic font-extrabold bg-red-500  rounded-lg h-10"
            onClick={() => {
              deleteProduct(info.id);
            }}
          >
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
