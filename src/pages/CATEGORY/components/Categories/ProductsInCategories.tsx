import React from 'react'
import { NavLink } from 'react-router-dom';

import s from './ProductsInCategories.module.scss'

type Props = {
    products:any,
}

const ProductsInCategories = ({products}: Props) => {

    console.log(products);

    if(products.length !== 0){
        return (
            <div className={s['products__category']}>
        
                <h2 className={s['products__category-title']}> {products[0].category.name} {products.length} товаров</h2>
        
                <div className={s["products__category-items"]}>
        
                    {products.map(({id, title, images, price}:any) => (
        
                        <NavLink key={id} to={`/products/${id}`}>
        
                            <div className={s['products__category-items-box']}>
        
                                <div className={s['item-image']}>
                                    <img src={images} alt=''/>
                                </div>
        
                                <div className={s['item-info']}>
                                    <p className={s['item-info-title']}>{title}</p>
                                    {/* <p className={s['item-info-rating']}>Рейтинг: </p> */}
                                    <p className={s['item-info-price']}>{price} $</p>
                                </div>
                            </div>
        
                        </NavLink>
                    ))}
        
                </div>
        
            </div>
          )
    }
    else{
        return(
            <></>
        )
    }

  
}

export default ProductsInCategories