import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      {/* 로그인 버튼 */}
      <div className="w-3/4 m-auto h-20 h-1/6 m-0 border-4   ">
        <div className="flex justify-end">
          <Link to="/login">
            <button> 로그인 </button>
          </Link>

          {/* 내상점 버튼 */}
          <Link className="ml-2" to="mine"></Link>
        </div>
      </div>

      <div className="flex items-center w-3/4 h-2/6 m-0 m-auto border-4 pt-6">
        {/* 로고  */}
        <div className="pr-60">
          <Link to="/">
            <svg
              width="45"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </div>

        {/* 판매하기 버튼  */}
        <div className="flex justify-end content-center ">
          <Link to="/enroll">판매하기</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
