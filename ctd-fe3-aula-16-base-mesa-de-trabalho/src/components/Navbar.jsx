import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="Home">Home</Link>
      <Link  to="Contact">Contato</Link>
        {/* Aqui você deve adicionar os Links para as rotas*/}
    </nav>
  )
}

export default Navbar