import React from "react";
import Item from "./Item";
import { useState } from "react"

function ShoppingList({ items }) {
  const [category, updateCategory] = useState("")
  const filter = (item) => {
    if(item.category === category || !category) {
      return <Item key={item.id} name={item.name} category={item.category} />
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
