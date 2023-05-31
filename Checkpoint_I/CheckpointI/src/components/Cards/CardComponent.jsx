/* eslint-disable react/prop-types */
import style from "./CardComponent.module.css";
function CardComponent({name, imageUrl}) {
    
    const urlDefault = "https://cdn.shopify.com/s/files/1/0509/4280/4161/products/monsteraobliqua_1200x1200.jpg?v=1635546533"
    return ( 
        <div className={style.container}>
            <div className={style.title}>{name ?? "Não informado"}</div>
            <div className={style.subtitle}>Minha coleção de plantas</div>
            <img
                src={imageUrl ?? urlDefault}
                alt="Via Flora Garden - Monsteras"
                className={style.img}
            />
        </div>
    );
}

export default CardComponent;