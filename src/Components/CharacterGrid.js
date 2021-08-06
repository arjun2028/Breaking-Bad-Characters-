import React from "react";
import Character from "./Character";
function CharacterGrid({ items, isLoading }) {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="cards">
      {items.map((item) => (
        <Character key={item.char_id} item={item} />
      ))}
    </div>
  );
}

export default CharacterGrid;
