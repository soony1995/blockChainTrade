import React, { useState } from "react";
import projectFirestore from "../firebase";
import { Link } from "react-router-dom";

const Product = ({ id, price, description, images }) => {
  const [doc, setDocs] = useState([]);

  const unSUb = () => {
    const unsub = projectFirestore
      .collection(images)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return doc;
  };
  unSUb();

  return (
    <div>
      {/* 상품 */}
      <div className="w-48 h-72 mr-2.5 mb-2.5 border-1">
        <Link to={{ pathname: `/detail/${id}`, state: { id: id } }}>
          {/* 상품 이미지 */}
          <div className="w-50 h-50 border-2">
            {/* <img src={} alt="상품이미지"></img> */}
          </div>
          {/* 상품 내용 */}
          <div className="mt-2 w-46 h-12 pt-2  border-2 ">
            <div className="not-italic font-extrabold whitespace-nowrap overflow-ellipsis overflow-hidden">
              {description}
            </div>
          </div>
          {/* 상품 가격 */}
          <div className=" not-italic font-extrabold mt-2 w-46 h-7 border-2">
            {" "}
            {price} Eth
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
