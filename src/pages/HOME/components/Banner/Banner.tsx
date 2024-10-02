import React from 'react'

import item1 from '../../../../images/icons/item1.png'
import item2 from '../../../../images/icons/item2.png'
import item3 from '../../../../images/icons/item3.png'

import s from './Banner.module.scss'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className={s['banner']}>
        
        <div className={(s['banner-item'], s['first'])}>
            <img src={item1} alt='man'/>
        </div>

        <div className={(s['banner-item'], s['second'])}>
            <img src={item2} alt='man'/>
        </div>

        <div className={(s['banner-item'], s['third'])}>
            <img src={item3} alt='man'/>
        </div>

        <div className={s['banner-info']}>
            <p className={s['banner-info-title']}>Spring mood</p>
            <p className={s['banner-info-subtitle']}>-20% на новую коллекцию</p>
        </div>
    </div>
  )
}

export default Banner