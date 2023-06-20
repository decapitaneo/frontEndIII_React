import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
    setLanguage((lang) => {
      //DICA: Função que troca um idioma por outro (ao clicar no botão)
      if(lang.id === "EN") setLanguage(languages.brazilian_portuguese);
      if (lang.id === "PTBR") setLanguage(languages.spanish);
      if (lang.id === "ES") setLanguage(languages.english);
    })
  }

  return (
    <div className="App">
    <LanguageContext.Provider value={ {language, handleChangeLA}}>{/*  DICA: Adicione o provider LanguageContext */}
      <Navbar />
      <Body />
    </LanguageContext.Provider>
  </div>
  )
}

export default App