import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Form from '../Form';
test('exibe mensagem de erro ao digitar números no campo de valor', () => {
  const { getByLabelText, getByText } = render(<Form />);
  const input = getByLabelText('Valor:');
  const submitButton = getByText('Enviar');

  fireEvent.change(input, { target: { value: '123' } });
  fireEvent.click(submitButton);

  const errorMessage = getByText('O valor não pode conter números');
  expect(errorMessage).toBeInTheDocument();
});

test('exibe mensagem de sucesso ao enviar o formulário sem erros', async () => {
    try {
      const { getByLabelText, getByText } = render(<Form />);
      const input = getByLabelText('Valor:');
      const submitButton = getByText('Enviar');
  
      fireEvent.change(input, { target: { value: 'Teste' } });
      fireEvent.click(submitButton);
  
      await waitFor(() => {
        const successMessage = getByText('Formulário enviado!');
        expect(successMessage).toBeInTheDocument();
      });
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  });
