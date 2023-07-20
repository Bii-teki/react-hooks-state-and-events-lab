import React, {useState} from "react";

function Item({ name, category }) {
const [listClass,setlistClass]=useState("")

function handleOnClick(e) {
  setlistClass("in-cart")
}

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleOnClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
