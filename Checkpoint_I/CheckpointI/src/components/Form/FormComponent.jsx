import style from "./FormComponent.module.css";
import CardComponent from "../Cards/CardComponent";
import InputComponent from "../Input/InputComponent";
import CardListComponent from "../Cards/CardlListComponent";
import { useState } from "react";

function FormComponent() {

    const [plantName, setPlantName] = useState("");
    const [plantImgUrl, setPlantImgUrl] = useState("");
    const [formIsValid, setFormIsValid] = useState(false);
    
    const [plantList, setPlantList] = useState([]);
    
    
    
    const handleChangePlantName = (event) => {
        setPlantName(event.target.value);
        formValidator(); 
    } 
    
    const handleChangePlantImageUrl = (event) => {
        setPlantImgUrl(event.target.value);
        formValidator();
    }
    
    const handleButtonClick = () => {
    
        
        setPlantList([
            ...plantList,
            {
                name:plantName,
                image:plantImgUrl
            }
        ])
        
        
        setPlantName("");
        setPlantImgUrl("");
        setFormIsValid(false);
    }
    
    const formValidator = () => {
        if((plantName.trim().length >3 && plantName.startsWith(' ')) || plantImgUrl.length >= 6 && /\d/.test(plantImgUrl)){
            setFormIsValid(true);
        }else {
            setFormIsValid(false);
            
            
            
        }
    
    }
    
    
    return ( 
        <>
            <CardListComponent>
                {plantList.map(plantCard => {
                    return(
                        <CardComponent 
                            key={plantCard.name}
                            name={plantCard.name}
                            imageUrl={plantCard.image}
                        />
                    )
                })
                }
                
            </CardListComponent>
            
            <div className={style.container}>
            
                <InputComponent
                    label="Minha planta favorita"
                    type="text"
                    value={plantName}
                    fnOnChange={handleChangePlantName}
                />
                
                <InputComponent
                    label="Imagem URL da minha espécie favorira"
                    type="url"
                    value={plantImgUrl}
                    fnOnChange={handleChangePlantImageUrl}
                />
                
                <button
                    onClick={handleButtonClick}
                    disabled={!formIsValid}>Salvar</button>
            </div>
        </>
    );
}

export default FormComponent;