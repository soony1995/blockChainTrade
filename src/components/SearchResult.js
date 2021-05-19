import React from "react";
import { Link } from "react-router-dom";

function SearchResult({
  id,
  title,
  price,
  quantity,
  location,
  description,
  category,
}) {
  return (
    <div>
      {/* 상품 */}
      <div className="w-48 h-72 mr-2.5 mb-2.5 border-4">
        <Link
          to={{
            pathname: `/detail/${id}`,
            state: {
              title: title,
              price: price,
              quantity: quantity,
              location: location,
              description: description,
              id: id,
              category: category,
            },
          }}
        >
          {/* 상품 이미지 */}
          <div className="w-50 h-50 border-2">
            <img
              src="https://media.bunjang.co.kr/product/151612795_1_1618401156_w292.jpg"
              alt="상품이미지"
            ></img>
          </div>

          {/* 상품 내용 */}
          <div className="mt-2 w-46 h-12 pt-2  border-2 ">
            <div className="whitespace-nowrap overflow-ellipsis overflow-hidden">
              {description}
            </div>
          </div>

          {/* 상품 가격 */}
          <div className="mt-2 w-46 h-7 border-2"> {price}</div>
        </Link>
      </div>
    </div>
  );
}

export default SearchResult;
