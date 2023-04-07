import React, { useState } from "react";

function Item({ name, category }) {
  const [isIn, setIsIn] = useState(false);

  const cartClass = isIn ? "in-cart" : "";

  const cartText = isIn ? "Remove From Cart" : "Add to Cart";

  function handleClick() {
    setIsIn((isIn) => !isIn);
  }
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartText}</button>
    </li>
  );
}

export default Item;
