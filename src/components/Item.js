import React from "react";
import { useState } from "react"

function Item({ name, category }) {
  const [itemClass, updateItem] = useState("")
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => updateItem(!!itemClass?"":"in-cart")}>{!!itemClass?"Remove from Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
