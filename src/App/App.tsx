import React, { useEffect } from 'react'

import AppRoutes from '../Routes/AppRoutes'
import Header from '../pages/HOME/components/Header/Header'
import Footer from '../pages/HOME/components/Footer/Footer'
import UserForm from '../pages/UserForm/userForm'

import '../styles/index.scss'

import { getCategories } from '../features/categories/categoriesSlice'
import { useAppDispatch } from '../hooks'
import { getProducts } from '../features/products/productsSlice'


const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch])

  return (
    <section className='main'>
      <Header/>
      <UserForm/>
      <div className='app'>
        <AppRoutes/>
      </div>
      <Footer/>
    </section>
    
  )
}

export default App