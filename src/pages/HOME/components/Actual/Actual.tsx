import React from 'react'

import item1 from '../../../../images/jeans1.png'
import item2 from '../../../../images/jeans2.png'
import item3 from '../../../../images/jeans3.png'

import s from './Actual.module.scss'

type Props = {}

const Actual = (props: Props) => {
  return (
    <div className={s['actual']}>
        <p className={s['actual-title']}>Актуальное</p>

        <div className={s['actual__items']}>

            <div className={s['actual__items-sidebar']}>

                <div className={s['actual__items-sidebar-item']}>
                    <img src={item1} alt='jeans'/>
                    <p className={s['actual__items-sidebar-item-title']}>Джинсы</p>
                    <p className={s['actual__items-sidebar-item-subtitle']}>Все еще в тренде</p>
                </div>

                <div className={s['actual__items-sidebar-item']}>
                    <img src={item2} alt='sneakers'/>
                    <p className={s['actual__items-sidebar-item-title']}>Джинсы</p>
                    <p className={s['actual__items-sidebar-item-subtitle']}>Все еще в тренде</p>
                </div>

            </div>

            <div className={s['actual__items-main']}>
                <img src={item3} alt='people in jeans'/>
                <p className={s['actual__items-sidebar-item-title']}>Джинсы</p>
                <p className={s['actual__items-sidebar-item-subtitle']}>Все еще в тренде</p>
            </div>

        </div>

    </div>
  )
}

export default Actual