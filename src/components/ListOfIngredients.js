import React, { useState } from "react";
import Ingredient from "./Ingredient";
import "./ListOfIngredients.css";

const ListOfIngredients = ({
  myIngredients,
  listOfCocktails,
  getCocktailRecipie,
}) => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  return (
    <div className="list-of-ingredients-container">
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
      <div className="drinks">
        {selectedIngredient && (
          <Ingredient
            selectedIngredient={selectedIngredient}
            listOfCocktails={listOfCocktails}
            getCocktailRecipie={getCocktailRecipie}
          />
        )}
      </div>
    </div>
  );
};

export default ListOfIngredients;
