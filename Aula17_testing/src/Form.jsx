import React, { useState } from 'react';

function Form() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const showMessage = (message) => {
    // Substitua o window.alert pela função showMessage
    console.log(message);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Verifica se o valor contém números
    const hasNumbers = /\d/.test(value);
    if (hasNumbers) {
      setError('O valor não pode conter números');
    } else {
      setError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error) {
      showMessage('Por favor, corrija os erros antes de enviar o formulário');
    } else {
      showMessage('Formulário enviado!');
      // Aqui você pode realizar a lógica de envio do formulário para um servidor, por exemplo
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Valor:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      {error && <p>{error}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
