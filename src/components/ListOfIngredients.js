import React, { useState } from "react";
import ListOfDrinks from "./ListOfDrinks";
import "./ListOfIngredients.css";

const ListOfIngredients = ({
  myIngredients,
  selectedIngredient,
  setSelectedIngredient,
}) => {
  return (
    <ul className="ingredient-selector">
      {myIngredients.map((ingredient, index) => (
        <li
          className={
            selectedIngredient === ingredient
              ? "ingredient-btn opened"
              : "ingredient-btn "
          }
          key={index}
          onClick={() => setSelectedIngredient(ingredient)}
        >
          {ingredient}
        </li>
      ))}
    </ul>
  );
};

export default ListOfIngredients;
