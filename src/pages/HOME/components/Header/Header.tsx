import React, { useEffect, useState } from "react";

import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import logo from "../../../../images/icons//MegaMart-icon.png";
import s from './Header.module.scss';
import AVATAR from '../../../../images/user-icon.jpg'

import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../utils/routes";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { toggleForm } from "../../../../features/user/userSlice";

import classNames from "classnames";
import { useGetProductsQuery } from "../../../../features/api/apiSlice";

type Props = {};

const Header = (props: Props) => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {currentUser, cart} = useAppSelector(({users}) => users);

  const [values, setValues] = useState({
    name: "Guest",
    avatar: AVATAR,
  });

  const [searchValue, setSearchValue] = useState("");

  const handleClick = () => {
    if(!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  }

  const {data, isLoading} = useGetProductsQuery({title: searchValue})

  useEffect(() => {
    if(!currentUser) return;
    setValues(currentUser);
  }, [currentUser]);

  const handleSearch = ({target: {value}}:any) => {
    setSearchValue(value);
  }

  return (
    <header className={s['header']}>

      <div className={s['header__logo']}>
        <Link to={ROUTES.HOME}>
          <img className={s['logo-img']} src={logo} alt="logo" />
        </Link>
      </div>

      <div className = {s['header__menu']}>

        <div className={s['header__menu-box']}>

          <div className = {s[`header__menu-search`]}>
            <IoMdSearch className = {s['header__menu-search-icon']}/>
            <input 
              type="search"
              className = {s['header__menu-search-input']}
              placeholder="Поиск товаров..."
              value={searchValue}
              onChange={handleSearch}
            />
          </div>

          {searchValue && 

          <div className={s['search__box']}>
            {isLoading ? 'Loading' : !data.length ? 'No results' : (
              data.map(({title, images, id}:any) => {
                return(
                  <Link key={id} to={`/products/${id}`} onClick={() => setSearchValue("")}>
                    <div className={s['search__box-items']}>

                      <div className={s['search__box-items-img']}>
                        <img src={images} alt=""/>
                      </div>

                      <p>{title}</p>

                    </div>
                  </Link>
                )
              })
            )}
          </div>
          }

        </div>

        
        <Link to={`/cart`}>
          <div className={s["cart-icon"]}>
            <IoCartOutline className = {classNames(s['header__menu-icon'], s['cart'])}/>
            {cart.length !==0 && <span className={s['cart-count']}>{cart.length}</span>}
          </div>
        </Link>

        <div className={s['user-box']} onClick={handleClick}>

          <div className={s['user-icon']}
          style={{backgroundImage: `url(${values.avatar})`}}></div>
          <p>{values.name}</p>
        </div>

      </div>
      
    </header>
  );
};

export default Header;
