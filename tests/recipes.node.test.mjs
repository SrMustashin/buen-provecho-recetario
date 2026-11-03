import test from 'node:test';
import assert from 'node:assert/strict';
import { RECIPES } from '../src/data/recipes.js';
import { filterRecipes, scaledAmount } from '../src/data/recipeUtils.js';

test('CP-01 — búsqueda por ingrediente chipotle', () => {
  const results = filterRecipes(RECIPES, 'chipotle');
  assert.equal(RECIPES.length, 2);
  assert.equal(results.length, 1);
  assert.equal(results[0].title, 'Tacos de pollo al chipotle');
});

test('CP-02 — ajustar pasta de 2 a 4 porciones', () => {
  const pasta = RECIPES.find(r => r.id === 'pasta-pesto');
  const ingredientPasta = pasta.ingredients.find(i => i.id === 'pasta');
  const ingredientPesto = pasta.ingredients.find(i => i.id === 'pesto');
  assert.equal(pasta.baseServings, 2);
  assert.equal(scaledAmount(ingredientPasta, 4, pasta.baseServings), 400);
  assert.equal(scaledAmount(ingredientPesto, 4, pasta.baseServings), 120);
});
