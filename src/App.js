import "./App.css";
import { useEffect, useState, useCallback, useMemo } from "react";
import fetchCocktailById from "./core/fetchCocktailById";
import fetchListOfCocktails from "./core/fetchListOfCocktails";
import ListOfIngredients from "./components/ListOfIngredients";
import DrinkRecipieModal from "./components/DrinkRecipieModal";

function App() {
  const [listOfCocktails, setListOfCocktails] = useState(null);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [showDrinkModal, setShowDrinkModal] = useState(false);

  const myIngredients = useMemo(
    () => ["Vodka", "Rum", "Ale", "Bourbon", "Tequila"],
    []
  );

  const getCocktailRecipie = async (idDrink) => {
    const cocktail = await fetchCocktailById(idDrink);
    setSelectedCocktail(cocktail);
  };

  const getListOfCocktails = useCallback(async () => {
    const listsOfCocktails = await fetchListOfCocktails(myIngredients);
    setListOfCocktails(listsOfCocktails);
  }, [myIngredients]);

  useEffect(() => {
    getListOfCocktails();
  }, [getListOfCocktails]);

  useEffect(() => {
    if (!selectedCocktail) {
      return;
    }
    setShowDrinkModal(true);
  }, [selectedCocktail]);

  return (
    <div className="App">
      <div className="Ingredients-box">
        <ListOfIngredients
          myIngredients={myIngredients}
          listOfCocktails={listOfCocktails}
          getCocktailRecipie={getCocktailRecipie}
        />
      </div>

      {showDrinkModal && (
        <DrinkRecipieModal
          selectedCocktail={selectedCocktail}
          showDrinkModal={showDrinkModal}
          setShowDrinkModal={setShowDrinkModal}
        />
      )}
    </div>
  );
}

export default App;
