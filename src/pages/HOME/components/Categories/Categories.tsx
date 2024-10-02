import React from 'react'
import { useAppSelector } from '../../../../hooks'
import { NavLink } from 'react-router-dom'

import s from './Categories.module.scss'

type Props = {}

const Categories = (props: Props) => {

    const {list} = useAppSelector(({categories}) => categories)
    console.log(list)

  return (
    <div className={s['categories']}>

        <h2 className={s['categories-title']}>Категории товаров</h2>

        <div className={s['categories__list']}>

            {list.map(({id, name, image}) => (

                <NavLink key={id} to={`/categories/${id}/products`}>

                    <div className={s['categories__list-item']}>
                        <div className={s['categories__list-item-image']}>
                            <img src={`${image}`} alt=''/>
                        </div>
                        <p className={s['categories__list-item-title']}>{name}</p>
                    </div>

                </NavLink>
                
            ))}

        </div>

        
    </div>
  )
}

export default Categories