import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Check, ChefHat, Clock3, Heart, Leaf, Lightbulb, Minus, Plus, Search, SlidersHorizontal, Sparkles, Users, X } from 'lucide-react';
import { RECIPES } from './data/recipes';
import { filterRecipes, scaledAmount } from './data/recipeUtils';
import { FoodArt } from './components/FoodArt';

const formatAmount = (value) => new Intl.NumberFormat('es-MX', { maximumFractionDigits: 2 }).format(value);

function Brand({ onClick }) {
  return <button className="brand" onClick={onClick} aria-label="Volver al inicio">
    <span className="brand-symbol"><ChefHat size={22} strokeWidth={2.5} /></span>
    <span className="brand-copy"><span>BUEN</span><strong>PROVECHO<span className="brand-dot">.</span></strong></span>
  </button>;
}

function RecipeCard({ recipe, isFavorite, onOpen, onFavorite }) {
  return <article className="recipe-card">
    <div className="recipe-image-wrap" onClick={() => onOpen(recipe.id)}>
      <FoodArt kind={recipe.id} />
      <div className="image-tags"><span className="image-tag">{recipe.category}</span></div>
    </div>
    <button className={`favorite-btn ${isFavorite ? 'is-favorite' : ''}`} aria-label={isFavorite ? `Quitar ${recipe.title} de favoritos` : `Agregar ${recipe.title} a favoritos`} aria-pressed={isFavorite} onClick={() => onFavorite(recipe.id)}><Heart size={19} fill={isFavorite ? 'currentColor' : 'none'} /></button>
    <div className="recipe-card-body">
      <div className="recipe-meta"><span><Clock3 size={15}/>{recipe.minutes} min</span><span className="meta-dot">·</span><span><SlidersHorizontal size={15}/>{recipe.difficulty}</span></div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <div className="recipe-card-footer"><span className="servings"><Users size={16}/>{recipe.baseServings} porciones</span><button className="view-recipe" onClick={() => onOpen(recipe.id)}>Ver receta <ArrowRight size={17}/></button></div>
    </div>
  </article>;
}

function DetailView({ recipe, isFavorite, onFavorite, onBack }) {
  const [servings, setServings] = useState(recipe.baseServings);
  const [ingredientsDone, setIngredientsDone] = useState([]);
  const [stepsDone, setStepsDone] = useState([]);
  const progress = Math.round(stepsDone.length / recipe.steps.length * 100);
  const toggleItem = (id, items, setter) => setter(items.includes(id) ? items.filter(x => x !== id) : [...items, id]);
  return <main className="detail-page page-container">
    <button onClick={onBack} className="back-button"><ArrowLeft size={17}/> Todas las recetas</button>
    <section className="detail-hero">
      <div className="detail-intro"><div className="eyebrow"><span className="tiny-line"/> {recipe.eyebrow}</div><h1>{recipe.title}</h1><p>{recipe.subtitle}</p>
        <div className="detail-chips"><span><Clock3 size={17}/>{recipe.minutes} minutos</span><span><SlidersHorizontal size={17}/>{recipe.difficulty}</span><span><Users size={17}/>{recipe.baseServings} porciones base</span></div>
        <button className={`favorite-inline ${isFavorite ? 'is-favorite' : ''}`} onClick={() => onFavorite(recipe.id)} aria-pressed={isFavorite}><Heart size={17} fill={isFavorite ? 'currentColor' : 'none'}/>{isFavorite ? 'Guardada en favoritos' : 'Guardar en favoritos'}</button>
      </div>
      <div className="detail-art"><FoodArt kind={recipe.id}/></div>
    </section>
    <div className="detail-grid">
      <section className="ingredients-panel" aria-labelledby="ingredients-heading"><div className="section-top"><div><span className="eyebrow-small">ANTES DE EMPEZAR</span><h2 id="ingredients-heading">Ingredientes</h2></div><div className="servings-control" aria-label="Ajustar porciones"><button aria-label="Reducir porciones" onClick={() => setServings(s => Math.max(1, s - 1))} disabled={servings === 1}><Minus size={16}/></button><span><strong data-testid="servings-count">{servings}</strong> <small>porciones</small></span><button aria-label="Aumentar porciones" onClick={() => setServings(s => Math.min(12, s + 1))} disabled={servings === 12}><Plus size={16}/></button></div></div>
        <p className="panel-desc">Marca lo que ya tienes listo en tu cocina.</p><div className="ingredient-list">{recipe.ingredients.map(item => <label className={`ingredient-row ${ingredientsDone.includes(item.id) ? 'completed' : ''}`} key={item.id}><input type="checkbox" checked={ingredientsDone.includes(item.id)} onChange={() => toggleItem(item.id, ingredientsDone, setIngredientsDone)} /><span className="fake-check"><Check size={13}/></span><span><strong>{formatAmount(scaledAmount(item, servings, recipe.baseServings))} {item.unit}</strong> {item.name}</span></label>)}</div>
        <div className="tip"><Lightbulb size={19}/><div><strong>Tip de cocina</strong><p>{recipe.tip}</p></div></div>
      </section>
      <section className="steps-panel" aria-labelledby="steps-heading"><div className="section-top"><div><span className="eyebrow-small">MANOS A LA OBRA</span><h2 id="steps-heading">Paso a paso</h2></div><span className="progress-number">{progress}%</span></div><div className="progress-track" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" aria-label="Progreso de preparación"><div style={{width:`${progress}%`}}/></div><p className="panel-desc">{stepsDone.length} de {recipe.steps.length} pasos completados</p>
        <div className="step-list">{recipe.steps.map((step, i) => <button className={`step-row ${stepsDone.includes(i) ? 'step-done' : ''}`} aria-pressed={stepsDone.includes(i)} key={step.title} onClick={() => toggleItem(i, stepsDone, setStepsDone)}><span className="step-number">{stepsDone.includes(i) ? <Check size={20}/> : String(i + 1).padStart(2,'0')}</span><span className="step-content"><strong>{step.title}</strong><span>{step.detail}</span></span></button>)}</div>
        {progress === 100 && <div className="completed-message" role="status"><Sparkles size={20}/> ¡Listo! Disfruta tu platillo. Buen provecho.</div>}
      </section>
    </div>
  </main>;
}

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Todas');
  const [favorites, setFavorites] = useState([]);
  const recipe = RECIPES.find(r => r.id === selectedId);
  const filteredRecipes = useMemo(() => filterRecipes(RECIPES, search, filter, favorites), [search, filter, favorites]);
  const toggleFavorite = id => setFavorites(favs => favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id]);
  const openRecipe = id => { setSelectedId(id); window.scrollTo?.(0,0); };
  const goHome = () => { setSelectedId(null); setSearch(''); setFilter('Todas'); window.scrollTo?.(0,0); };

  return <div className="app-shell"><header className="site-header"><div className="header-inner page-container"><Brand onClick={goHome}/><nav className="top-nav" aria-label="Navegación principal"><button className={!recipe ? 'nav-active' : ''} onClick={goHome}>Descubrir recetas</button><button onClick={() => {setSelectedId(null); setSearch(''); setFilter('Favoritas');}} className={!recipe && filter === 'Favoritas' ? 'nav-active' : ''}>Mis favoritos <span className="favorite-count">{favorites.length}</span></button></nav><div className="header-label"><span className="header-label-dot"/> Hecho para cocinar rico</div></div></header>
      {recipe ? <DetailView key={recipe.id} recipe={recipe} isFavorite={favorites.includes(recipe.id)} onFavorite={toggleFavorite} onBack={goHome}/> : <main>
        <section className="hero-section"><div className="page-container hero-grid"><div className="hero-copy"><span className="hero-kicker"><Sparkles size={15}/> PEQUEÑAS RECETAS, GRANDES MOMENTOS</span><h1>El buen sabor <em>empieza aquí.</em></h1><p>Dos recetas deliciosas, explicadas sin complicaciones. Tú pones el antojo, nosotros el paso a paso.</p><a className="hero-cta" href="#recetas">Explorar recetas <ArrowRight size={19}/></a><div className="hero-bottom"><span className="hero-avatar">👩‍🍳</span><span><strong>Hechas para ti</strong><small>Fáciles, rápidas y deliciosas</small></span></div></div><div className="hero-visual" aria-hidden="true"><div className="hero-oval"/><div className="hero-plate"><FoodArt kind="pasta-pesto" compact/></div><div className="hero-sticker sticker-top"><span>✦</span> Sabor real</div><div className="hero-sticker sticker-bottom"><Clock3 size={15}/> Desde 20 min</div><div className="hero-sparkle hero-sparkle-one">✳</div><div className="hero-sparkle hero-sparkle-two">✳</div></div></div></section>
        <section id="recetas" className="recipes-section page-container"><div className="recipes-heading"><div><span className="eyebrow"><span className="tiny-line"/> UN POCO DE INSPIRACIÓN</span><h2>¿Qué cocinamos hoy?</h2><p>Elige tu favorita y empieza a crear algo delicioso.</p></div><div className="recipe-total"><BookOpen size={17}/> 2 recetas para descubrir</div></div>
          <div className="search-filter-row"><div className="search-box"><Search size={19}/><input aria-label="Buscar recetas" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Busca una receta o ingrediente..."/>{search && <button aria-label="Limpiar búsqueda" onClick={()=>setSearch('')}><X size={16}/></button>}</div><div className="filter-list" aria-label="Filtrar recetas">{['Todas','Rápidas','Favoritas'].map(f => <button key={f} className={filter === f ? 'filter-active' : ''} aria-pressed={filter === f} onClick={()=>setFilter(f)}>{f === 'Favoritas' && <Heart size={15}/>} {f}</button>)}</div></div>
          {filteredRecipes.length ? <div className="recipe-grid">{filteredRecipes.map(r => <RecipeCard key={r.id} recipe={r} isFavorite={favorites.includes(r.id)} onOpen={openRecipe} onFavorite={toggleFavorite}/>)}</div> : <div className="empty-state"><div>🔎</div><h3>No encontramos recetas</h3><p>Prueba otra búsqueda o cambia el filtro.</p><button onClick={()=>{setSearch('');setFilter('Todas');}}>Mostrar todas</button></div>}
        </section><section className="closing-strip page-container"><div><span className="leaf-icon"><Leaf size={21}/></span><strong>La mejor receta lleva un poquito de amor.</strong></div><span>¡Nos vemos en la cocina! <span aria-hidden="true">♡</span></span></section></main>}
      <footer className="site-footer page-container"><span>© 2026 Buen Provecho · Proyecto escolar de React</span><span>Desarrollado con <Heart size={13} fill="currentColor"/> y muchas ganas de cocinar</span></footer></div>;
}
