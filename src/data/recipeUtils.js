/** Lógica pura para poder probar las reglas de negocio sin interfaz ni red. */
export function filterRecipes(recipes, search = '', filter = 'Todas', favorites = []) {
  const query = search.toLocaleLowerCase('es-MX').trim();
  return recipes.filter(recipe => {
    const text = `${recipe.title} ${recipe.category} ${recipe.description} ${recipe.ingredients.map(i => i.name).join(' ')}`.toLocaleLowerCase('es-MX');
    const matchesSearch = text.includes(query);
    const matchesFilter = filter === 'Todas'
      || (filter === 'Rápidas' && recipe.minutes <= 20)
      || (filter === 'Favoritas' && favorites.includes(recipe.id));
    return matchesSearch && matchesFilter;
  });
}

export function scaledAmount(ingredient, servings, baseServings) {
  if (baseServings <= 0 || servings <= 0) throw new RangeError('Las porciones deben ser mayores que cero');
  return ingredient.amount * servings / baseServings;
}
