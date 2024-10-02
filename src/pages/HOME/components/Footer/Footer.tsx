import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../utils/routes'

import LOGO from '../../../../images/icons/MegaMart-icon.png'

import s from './Footer.module.scss'

import { AiOutlineYoutube, AiOutlineFacebook, AiOutlineInstagram  } from "react-icons/ai";

type Props = {}

const Footer = (props: Props) => {
  return (
    
    <footer className={s['footer']}>

        <div className={s['footer__info']}>

          <Link to={ROUTES.HOME}>
            <img className={s['logo']} src={LOGO} alt='stuff logo'/>
          </Link>

          <div className={s['footer__socials']}>
            <AiOutlineYoutube className={s['icons']}/>
            <AiOutlineFacebook className={s['icons']}/>
            <AiOutlineInstagram className={s['icons']}/>
          </div>
        </div>
        
    </footer>
  )
}

export default Footer