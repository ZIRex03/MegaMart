import React from 'react'
import Banner from '../Banner/Banner'
import Categories from '../Categories/Categories'
import News from '../News/News'
import Products from '../Products/Products'
import { useAppSelector } from '../../../../hooks'
import Actual from '../Actual/Actual'


const Home = () => {

  const { list } = useAppSelector(({products}) => products)

  return (
    <div>
      <Banner/>
      <Categories/>
      <Actual/>
      <Products products={ list } amount={ 5 }/>
      <News/>
    </div>
  )
}

export default Home