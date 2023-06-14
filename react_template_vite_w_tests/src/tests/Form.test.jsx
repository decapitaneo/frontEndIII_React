import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import Form
 from "../Form";
test('Valida entrada numérica no formulário', () => {
    render(<Form />);
  
    const input = screen.getByLabelText('Valor:');
    const submitButton = screen.getByRole('button', { name: 'Enviar' });
  
    // Insere um valor numérico no campo de entrada
    fireEvent.change(input, { target: { value: '123' } });
  
    // Verifica se a mensagem de erro é exibida
    expect(screen.getByText('O valor não pode conter números')).toBeInTheDocument();
  
    // Tenta enviar o formulário
    fireEvent.click(submitButton);
  
    // Verifica se o formulário não foi enviado
    expect(screen.queryByText('Formulário enviado!')).toBeNull();
  });
  
  test('Envia o formulário com sucesso', () => {
    render(<Form />);
  
    const input = screen.getByLabelText('Valor:');
    const submitButton = screen.getByRole('button', { name: 'Enviar' });
  
    // Insere um valor válido no campo de entrada
    fireEvent.change(input, { target: { value: 'abc' } });
  
    // Verifica se a mensagem de erro não é exibida
    expect(screen.queryByText('O valor não pode conter números')).toBeNull();
  
    // Tenta enviar o formulário
    fireEvent.click(submitButton);
  
    // Verifica se o formulário foi enviado com sucesso
    expect(screen.getByText('Formulário enviado!')).toBeInTheDocument();
  });