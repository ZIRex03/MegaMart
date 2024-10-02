
import React, { useState } from 'react'

import { HiArrowLongRight } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { MdDirectionsCar } from "react-icons/md";
import { LuBox } from "react-icons/lu";
import { BsGeoAlt } from "react-icons/bs";

import s from './Product.module.scss'
import { useAppDispatch } from '../../../hooks';
import { addItemToCart } from '../../../features/user/userSlice';


const Product = (item : any) => {

    const {title, description, images, price} = item;

    const [descriptionFlag, setDescriptionFlag] = useState(false);
    const [deliveryFlag, setDeliveryFlag] = useState(false);
    const dispatch = useAppDispatch();

    const addToCart = () => {
        dispatch(addItemToCart(item))
    }

    const arrowDescStyle = {
        transform: descriptionFlag? 'rotate(180deg)' : 'rotate(0)',
    }

    const arrowDeliveryStyle = {
        transform: deliveryFlag? 'rotate(180deg)' : 'rotate(0)',
    }
    
  return (
    <div className={s['product']}>

        <div className={s['product__image']}>

            <div className={s['product__image-small']}>

                <div className={s['container']}>
                    <img src={images} alt=''/>
                </div>

                <div className={s['container']}>
                    <img src={images} alt=''/>
                </div>

                <div className={s['container']}>
                    <img src={images} alt=''/>
                </div>

                <div className={s['container']}>
                    <img src={images} alt=''/>
                </div>

                <div className={s['container']}>
                    <img src={images} alt=''/>
                </div>

                <div className={s['container']}>
                    <img src={images} alt=''/>
                </div>
                
            </div>

            <div className={s["product__image-main"]}>
                <img src={images[0]} alt=''/>
            </div>
        </div>

        <div className={s["product__info"]}>
            <h2 className={s['product__info-title']}>{title}</h2>
            <p className={s["product__info-price"]}>цена<span> {price}$</span></p>

            <div className={s["product__info-button-area"]}>

                <button 
                    className={s['shop-button']}
                    type="button"
                    onClick={addToCart}>
                    В КОРЗИНУ
                    <HiArrowLongRight className={s['button-shop-icon']}/>
                </button>
                
            </div>

            <p className={s["product__info-rating"]}>РЕЙТИНГ:<span></span></p>
            <p className={s["product__info-count"]}>ОСТАЛОСЬ: <span> штук</span></p>

            <div className={s["product__info-description"]}
                onClick={()=> setDescriptionFlag(prev => !prev)}>

                <div className={s["product__info-description-box"]}>
                    <p className={s["product__info-description-title"]}>ОПИСАНИЕ ТОВАРА</p>
                    <IoIosArrowDown className={s['arrow-down']}
                        style={arrowDescStyle}
                        
                    />
                </div>

                {descriptionFlag && 
                    <div className={s['product__info-description-downlist']}>
                       <p>{description}</p>    
                    </div>
                }

            </div>

            <div className={s["product__info-delivery"]}>

                <div className={s["product__info-delivery-box"]} 
                    onClick={()=> setDeliveryFlag(prev => !prev)}>
                    <p className={s["product__info-delivery-title"]}>УСЛОВИЯ ДОСТАВКИ</p>
                    <IoIosArrowDown className={s['arrow-down']}
                    style={arrowDeliveryStyle}
                    />
                </div>

                {deliveryFlag && 
                    <div className={s['product__info-delivery-downlist']}>
                       <p>Бесплатная доставка при заказе от 3 000 руб.
                       Вы можете выбрать подходящий для вас способ доставки товара:</p> 

                        <div className={s["product__info-delivery-downlist-items"]}>
                            
                            <div className={s['item']}>
                                <MdDirectionsCar className={s['icons']}/>
                                <p>
                                    Курьерская <br/>доставка. <br/>
                                    Срок – от 1 дня.
                                </p>
                            </div>

                            <div className={s['item']}>
                                <LuBox className={s['icons']}/>
                                <p>
                                    Пункты выдачи заказов и <br/>постаматы. <br/>
                                    Срок – от 1 дня.
                                </p>
                            </div>

                            <div className={s['item']}>
                                <BsGeoAlt className={s['icons']}/>
                                <p>
                                    Самовывозом из магазина. <br/>
                                    Срок – от 1 дня.
                                </p>
                            </div>
                        </div>  
                    </div>
                }

            </div>

        </div>

    </div>
  )
}

export default Product