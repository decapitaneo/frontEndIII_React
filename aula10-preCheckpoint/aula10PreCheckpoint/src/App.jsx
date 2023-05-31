import { useState } from 'react';
import './App.css'
import CardComponent from './Components/Card/CardComponent'
import InputComponent from './Components/Input/InputComponent';

function App() {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [card, setCard] =  useState({});
  
  const handleChangeTitle = (event) =>{
    setTitle(event.target.value)
  }
  
  const handleChangeImgUrl = (event)=> {
    setImgUrl(event.target.value)
  }
  
  const handleButtonClick = (event) => {
    event.preventDefault();
  
    setCard(
      {
        title:title,
        imgUrl:imgUrl
      }
    )
    console.log(card)
  }

  return (
    <>
      <h1>Template Checkpoint 1</h1>
      <form>
            <InputComponent
                title ="Titulo Naruto"
                type= "text"
                value={"title"}
                fnOnChange={handleChangeTitle}
                //fnOnChange={(handleChangeTitle) =>{}}
            />
            
            <InputComponent
                title ="Img URL"
                type= "url"
                value={imgUrl}
                fnOnChange={handleChangeImgUrl}
                //fnOnChange={(handleChangeImgUrl) =>{}}
            />
            <button onClick={handleButtonClick}>Salvar</button>
          
        </form>
      
      <CardComponent
        title={card.title}
        imgUrl={card.imgUrl}
      />
    </>
  )
}

export default App
