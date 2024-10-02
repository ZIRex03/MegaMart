import React from 'react'
import { Link } from 'react-router-dom'

import s from './Products.module.scss'

interface Props {
  products: any,
  amount: number,
}

const Products = ({products, amount} : Props) => {

  console.log(products);

  const list = products.filter((_:any,i:number) => i < amount);

  return (

    <div className={s['products']}>

      <h2>Популярное</h2>

      <div className={s["products__list"]}>

        {list.map(({ id, title, price, images } : any) => (

          <Link to={`/products/${id}`} key={id} className={s['links']}>

            <div className={s["products__list-item"]}>

              <div className={s['products__list-item-image']}>
                <img src={images} alt=''/>
              </div>

              <div className={s["products__list-item-info"]}>
                <p className={s['products__list-item-info-price']}>{price} $</p>
                <p className={s["products__list-item-info-description"]}>{title}</p>
              </div>

            </div>

          </Link>

        ))}

      </div>


    </div>
  )
}

export default Products