const getListOfDrinkIngredients = (selectedCocktail) => {
  const ingredientArray = [];
  const measureArray = [];
  for (let i = 1; i <= 15; i++) {
    const ingr = selectedCocktail[`strIngredient` + i];
    if (ingr === null) {
      break;
    }
    ingredientArray.push(ingr);
  }
  for (let i = 1; i <= 15; i++) {
    const measure = selectedCocktail[`strMeasure` + i];
    if (measure === null) {
      break;
    }
    measureArray.push(measure);
  }
  return { ingredients: ingredientArray, measure: measureArray };
};

export default getListOfDrinkIngredients;
