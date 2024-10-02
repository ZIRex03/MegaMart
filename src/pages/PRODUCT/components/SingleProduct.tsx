import React, { useEffect} from 'react'

import { redirect, useParams } from 'react-router-dom';
import {  useGetProductQuery } from '../../../features/api/apiSlice';

import { ROUTES } from '../../../utils/routes';
import Product from './Product';

type Props = {}

const SingleProduct = (props: Props) => {

    const {id} = useParams();

    const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({id})

    useEffect(() => {

        if(!isFetching && !isLoading && !isSuccess){
            redirect(ROUTES.HOME);
        }
    }, [isLoading, isFetching, isSuccess])

    console.log(data);

    

  return (

    !data? (
        <>
            Loading...
        </>
    ) : (
        <Product {...data}/>
    )
    
  )
}

export default SingleProduct