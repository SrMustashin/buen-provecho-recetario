import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import App from './App';

beforeEach(() => { window.scrollTo = vi.fn(); });

describe('Recetario Buen Provecho: casos de prueba solicitados', () => {
  it('CP-01: la búsqueda filtra recetas por ingrediente y muestra solo las coincidentes', async () => {
    const user = userEvent.setup();
    render(<App />);
    const cardsBefore = screen.getAllByRole('article');
    expect(cardsBefore).toHaveLength(2);
    await user.type(screen.getByRole('textbox', { name: 'Buscar recetas' }), 'chipotle');
    const cardsAfter = screen.getAllByRole('article');
    expect(cardsAfter).toHaveLength(1);
    expect(within(cardsAfter[0]).getByRole('heading', {name: 'Tacos de pollo al chipotle'})).toBeInTheDocument();
    expect(screen.queryByRole('heading', {name: 'Pasta cremosa al pesto'})).not.toBeInTheDocument();
  });

  it('CP-02: aumentar porciones recalcula las cantidades de ingredientes correctamente', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getAllByRole('button', { name: /Ver receta/i })[0]);
    expect(screen.getByTestId('servings-count')).toHaveTextContent('2');
    expect(screen.getByText(/200 g/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Aumentar porciones' }));
    await user.click(screen.getByRole('button', { name: 'Aumentar porciones' }));
    expect(screen.getByTestId('servings-count')).toHaveTextContent('4');
    expect(screen.getByText(/400 g/)).toBeInTheDocument();
    expect(screen.getByText(/120 g/)).toBeInTheDocument();
  });
});
