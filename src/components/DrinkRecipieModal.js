import React from "react";
import "./DrinkRecipieModal.css";
import getListOfDrinkIngredients from "../core/getListOfDrinkIngredients";

const DrinkRecipieModal = ({ selectedCocktail, setShowDrinkModal }) => {
  const listOfDrinkIngredients = getListOfDrinkIngredients(selectedCocktail);
  return (
    <div className="drink-modal">
      <div className="drink-container">
        <div
          className="close-modal-btn"
          onClick={() => setShowDrinkModal(false)}
        >
          Close modal
        </div>
        <div className="drink">
          <div className="drink-image">
            <img src={selectedCocktail.strDrinkThumb} alt="" />
          </div>
          <div className="drink-info-container">
            <h2>{selectedCocktail.strDrink}</h2>
            <div className="drink-info">
              <h4>Category:</h4>
              <p>{selectedCocktail.strCategory}</p>
            </div>
            <div className="drink-info">
              <h4>Type:</h4>
              <p>{selectedCocktail.strAlcoholic}</p>
            </div>
            <div className="drink-info">
              <h4>Glass:</h4>
              <p>{selectedCocktail.strGlass}</p>
            </div>
            <div className="drink-info">
              <h4>Ingredients:</h4>
              <div className="drink-info-ingredients">
                <div className="ingredients-container">
                  {listOfDrinkIngredients.ingredients.map((ingr) => (
                    <p key={ingr}>{ingr}</p>
                  ))}
                </div>
                <div className="ingredients-container">
                  {listOfDrinkIngredients.measure.map((measure, index) => (
                    <p key={index}>{measure}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="drink-info">
              <h4>Instructon:</h4>
              <p>{selectedCocktail.strInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkRecipieModal;
