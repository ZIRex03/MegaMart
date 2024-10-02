import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../utils/routes'
import SingleProduct from '../pages/PRODUCT/components/SingleProduct'
import SingleCategory from '../pages/CATEGORY/components/Categories/SingleCategory'
import Home from '../pages/HOME/components/Home/Home'
import Cart from '../pages/CART/Cart'
import Profile from '../pages/PROFILE/Profile'


const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
        <Route path={ROUTES.CATEGORIES} element={<SingleCategory/>}/>
        <Route path={ROUTES.CART} element={<Cart/>}/>
        <Route path={ROUTES.PROFILE} element={<Profile/>}/>
    </Routes>
)

export default AppRoutes