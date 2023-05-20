import style from './Produtos.module.css'

export function Produtos({ name, image, price }) {
  return (
    <li className={style.cardItem}>
      <h2>{name}</h2>
      <img src={image} />
      <h3>{price}</h3>
    </li>
  )
}