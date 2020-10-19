import React from 'react';
import { fireEvent, getByLabelText, render, waitForDomChange, waitForElement } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import renderWithRouter from './helpers/renderWithRouter';

describe('App.js', () => {
  it('renders without errors', () => {
    const { getByText } = renderWithRouter(
      <App />
    );

    expect(getByText('Corn Questions')).toBeInTheDocument();
  });

  it('creates a new question and renders it on screen', async () => {
    const { getByText, history, getByRole, getByLabelText } = renderWithRouter(
      <App />
    );

    expect(getByText('Corn Questions')).toBeInTheDocument();

    const buttonNewQuestion = getByRole('button', { 
      name: "Nova Pergunta"
    });
    fireEvent.click(buttonNewQuestion);

    expect(getByText('Faça uma pergunta')).toBeInTheDocument();
    expect(history.location.pathname).toBe('/new-question');

    const inputNewQuestion = getByLabelText('Digite a sua pergunta:');
    fireEvent.change(inputNewQuestion, {
      target: {
        value: 'Como funciona o waitFor?'
      }
    });

    const inputUserName = getByLabelText('Digite o seu nome:');
    fireEvent.change(inputUserName, {
      target: {
        value: 'Icaro'
      }
    });

    const buttonSend = getByRole('button', { 
      name: "Enviar"
    });
    fireEvent.click(buttonSend);

    await waitForDomChange(() => {
      expect(getByText(/Como  o waitFor/i)).toBeInTheDocument();
    }, { timeout: 2000 });
    
    // expect(getByText(/Icaro/i)).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');
  });
});
