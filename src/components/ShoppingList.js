import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [filter, setFilter] = useState("All")
console.log(filter)
const filteredItems =items.filter((item)=>{
  if(filter === "All"){
    return true 
  
  } else{
    return item.category === filter
  }
}
)
function handleCategoryChange(e) {
  setFilter(e.target.value)
}


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      

      </ul>
     
    </div>
  );
}

export default ShoppingList;
