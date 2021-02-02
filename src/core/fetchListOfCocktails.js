const fetchListOfCocktails = async (myIngredients) => {
  return await Promise.all(
    myIngredients.map(async (ingr) =>
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingr}`)
        .then((resp) => resp.json())
        .then((result) => {
          const data = {};
          data[ingr] = { drinks: result.drinks };
          return data;
        })
    )
  ).then((result) =>
    result.reduce((acc, curr) => ({
      ...acc,
      ...curr,
    }))
  );
};

export default fetchListOfCocktails;
