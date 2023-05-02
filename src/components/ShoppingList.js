import React from "react";
import Item from "./Item";
import { useState } from "react"

function ShoppingList({ items }) {
  const [categorys, updateCategory] = useState("")
  const filter = ({category, id, name}) => {
    if(category === category || !category) {
      return <Item key={id} name={name} category={category} />
    }
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => updateCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => filter(item))}
      </ul>
    </div>
  );
}

export default ShoppingList;
