import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({data}) => {
  return (
   //Dica da DH: Você pode adicionar um evento de click neste componente (...para acessar a rota beer/:id)
    <div className='card'> 
      <Link to={`beer/${data.id}`}>
        <h3>{data.name}</h3>
      </Link>
        <p>{data.tagline}</p>
        <img src={data.image_url} alt="beer-detail" />

    </div>
  )
}

export default Card