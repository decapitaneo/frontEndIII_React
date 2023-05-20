import styles from "./CidadeComponent.module.css";
function CidadeComponent({country, city, population, color}){
    return(
        <div className={styles.div}>
            <h1>País: {country}</h1>
            <h3 style={{ color: color }}>Cidade: {city}</h3>
            <h4>População: {population}</h4>
        </div>
        
    )
}

export default CidadeComponent;