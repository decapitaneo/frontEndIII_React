function ListaCidadesComponent(cidades,filtro){
    return(
        
            cidades.map((item, index) =>{
            if(item.country.match(filtro)){
              return<CidadeComponent
                key={index}
                {...item}
              />
            }
            })
        
    )
}

export default ListaCidadesComponent;