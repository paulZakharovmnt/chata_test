const fetchCocktailById = async (idDrink) => {
  return await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
  )
    .then((resp) => resp.json())
    .then((result) => result.drinks[0]);
};

export default fetchCocktailById;
