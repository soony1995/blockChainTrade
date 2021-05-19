import React from "react";

const Detail = (props) => {
  return (
    <div>
      <div className="w-3/4 m-auto h-20 h-1/6 m-0 border-4   ">
        <div>title = {props.location.state.title}</div>
        <div>price = {props.location.state.price}</div>
        <div>location = {props.location.state.location}</div>
        <div>quantity = {props.location.state.quantity}</div>
        <div>category = {props.location.state.category}</div>
        <form onSubmit={console.log("구매하기 버튼을 눌렀습니다.")}>
          <input type="submit" value="구매하기" />
        </form>
      </div>
    </div>
  );
};

export default Detail;
