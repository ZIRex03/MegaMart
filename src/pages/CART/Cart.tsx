import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'

import s from './Cart.module.scss'

import { sumBy } from '../../utils/common';
import { addItemToCart, removeItemFromCart } from '../../features/user/userSlice';

import { FaPlus, FaMinus } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

import classNames from 'classnames';

type Props = {}

const Cart = (props: Props) => {

    const dispatch = useAppDispatch();

    const {cart} = useAppSelector(({users}) => users);

    const changeQuantity = (item:any, quantity:any) => {
        dispatch(addItemToCart({...item, quantity}))
    }

    const removeItem = (item:any) => {
        dispatch(removeItemFromCart(item.id))
    }

    const discount = 5;
    const deliverySum = 10;

    console.log(cart)

    if(cart.length !== 0){
        return (
            <div className={s['cart']}>
    
                <div className={s['cart__user']}>
    
                    <h2 className={s['cart__user-title']}>Информация о клиенте</h2>
    
                    <div className={s['cart__user-info']}>
    
                        <div className={s['cart__user-info-input']}>
                            <p className={s['title']}>ВАШЕ ИМЯ*</p>
                            <p className={s['subtitle']}>Имя получателя заказа</p>
                            <input placeholder='Ваше имя'/>
                        </div>
    
                        <div className={s['cart__user-info-input']}>
                            <p className={s['title']}>E-MAIL*</p>
                            <p className={s['subtitle']}>Для отправки деталей заказа</p>
                            <input placeholder='Введите e-mail'/>
                        </div>
    
                        <div className={s['cart__user-info-input']}>
                            <p className={s['title']}>ТЕЛЕФОН*</p>
                            <p className={s['subtitle']}>Чтобы мы могли связаться для уточнения <br /> деталей доставки или заказанного товара</p>
                            <input placeholder='Введите телефон'/>
                        </div>
    
                    </div>
                </div>
    
                <div className={s['cart__products']}>

                    {cart.map((item) => {

                        const {title, images, quantity, price, id}:any = item;

                        return(

                            <>
                            
                                <div className={classNames(s['cart__products-main'], s['desktop'])} key={id}>
        
                                    <div className={s['cart__products-main-image']}>
                                        <img className={s['item-image']} src={images} alt=''/>
                                    </div>
        
                                    <div className={s['cart__products-main-info']}>
        
                                        <div className={s['cart__products-main-info-text']}>
                                            <p className={s['title']}>{title}</p>
                                            
                                            <RiDeleteBinLine
                                                className={s['delete']}
                                                onClick={()=>removeItem(item)}
                                            />
                                        </div>              
        
                                        <div className={s['cart__products-main-info-count']}>

                                            <div className={s['buttons-count']}>
                                                <FaMinus
                                                    className={s['button-minus']}
                                                    onClick={() => changeQuantity(item, Math.max(1, quantity-1))}
                                                />
                    
                                                <p className={s['count-number']}>{quantity}</p>
                    
                                                <FaPlus
                                                    className={s['button-plus']}
                                                    onClick={() => changeQuantity(item, Math.max(1, quantity+1))}
                                                />
                                            </div>
                
                                            <p className={s['cart__products-main-info-amount']}>{price*quantity}$</p>
                                        </div>  
        
                                    </div>
        
                                </div>

                                <div className={classNames(s['cart__products-main'], s['mobile'])} key={id}>

                                    <div className={s['head']}>

                                        <div className={s['cart__products-main-image']}>
                                            <img className={s['item-image']} src={images} alt=''/>
                                        </div>
            
                                        <div className={s['cart__products-main-info']}>
            
                                            <div className={s['cart__products-main-info-text']}>
                                                <p className={s['title']}>{title}</p>
                                                <RiDeleteBinLine
                                                    className={s['delete']}
                                                    onClick={()=>removeItem(item)}
                                                />
                                            </div>    

                                            
                                        </div>

                                    </div>
                  
        
                                    <div className={s['cart__products-main-info-count']}>

                                        <div className={s['buttons-count']}>
                                            <FaMinus
                                                className={s['button-minus']}
                                                onClick={() => changeQuantity(item, Math.max(1, quantity-1))}
                                            />
                    
                                            <p className={s['count-number']}>{quantity}</p>
                    
                                            <FaPlus
                                                className={s['button-plus']}
                                                onClick={() => changeQuantity(item, Math.max(1, quantity+1))}
                                            />
                                        </div>
                
                                        <p className={s['cart__products-main-info-amount']}>{price*quantity}$</p>
                                    </div>  
        
                                    
        
                                </div>

                            </>

                        )
                    })}
    
                    <div className={s['cart__products-dop']}>
    
                        <div className={s['cart__products-dop-info']}>
                            <p className={s['title']}>Количество</p>
                            <div className={s['dots']}></div>
                            <p className={s['subtitle']}>{cart.length}</p>
                        </div>
    
                        <div className={s['cart__products-dop-info']}>
                            <p className={s['title']}>Стоимость</p>
                            <div className={s['dots']}></div>
                            <p className={s['subtitle']}>{sumBy(cart.map(({quantity, price}:any) => quantity* price))}$</p>
                        </div>

                        <div className={s['cart__products-dop-info']}>
                            <p className={s['title']}>Скидка</p>
                            <div className={s['dots']}></div>
                            <p className={s['subtitle']}>{discount}$</p>
                        </div>

                        <div className={s['cart__products-dop-info']}>
                            <p className={s['title']}>Доставка</p>
                            <div className={s['dots']}></div>
                            <p className={s['subtitle']}>{deliverySum}$</p>
                        </div>
    
                        <div className={s['cart__products-dop-info']}>
                            <p className={classNames(s['title'], s['big'])}>Итого</p>
                            <div className={s['dots']}></div>
                            <p className={classNames(s['subtitle'], s['big'])}>{(sumBy(cart.map(({quantity, price}:any) => quantity* price)))-discount+deliverySum}$</p>
                        </div>
                    </div>
    
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={s['empty']}>В корзине пусто</div>
        )
    }

    
}

export default Cart