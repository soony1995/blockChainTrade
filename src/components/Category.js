import React from "react";
import { useState } from "react"

const Category = ({categorys}) =>{
    const [category_label,setCategory_label] = useState("카테고리를 입력해주세요")

    const change_label = (tag) => {
        setCategory_label([tag])
    }
    return (
        <div>
        <ul className="main_category">
            {categorys.map((category) => (
                <button id={category.index} onClick={() => change_label(category.tag)} >
                    {category.tag}
                </button>
            ))}
        </ul>
        <label>{category_label}</label>
        </div>
    )
}
export default Category;