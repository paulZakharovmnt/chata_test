import React, { useEffect, useState } from "react";

const ListOfDrinks = ({
  selectedIngredient,
  listOfCocktails,
  getCocktailRecipie,
}) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setSearchInput("");
  }, [selectedIngredient]);

  return (
    <div className="list-of-drinks-container">
      <div className="input-search">
        <input
          value={searchInput}
          placeholder="Drink search..."
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
      <div className="list-of-drinks">
        {listOfCocktails[selectedIngredient].drinks
          .filter((drink) =>
            searchInput.toLowerCase() === ""
              ? true
              : drink.strDrink.toLowerCase().includes(searchInput)
          )
          .map((drink) => (
            <div
              className="drink-box"
              onClick={() => getCocktailRecipie(drink.idDrink)}
              key={drink.idDrink}
            >
              <img src={drink.strDrinkThumb} alt="" />
              <p>{drink.strDrink}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListOfDrinks;
