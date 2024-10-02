import React from 'react'

import electronics from '../images/electronics.png'
import jewelery from '../images/jewelery.png'
import menslClothing from '../images/mens-clothing.png'
import womenslClothing from '../images/womens-clothing.png'



const ImageGlobalSelector = ({name}: any) => {

    switch(name){

        case 'electronics':
            return <img src={electronics} alt='electro'/>;

        case 'jewelery':
            return <img src={jewelery} alt='jewelery'/>;

        case 'men\'s clothing':
            return <img src={menslClothing} alt='mens clothing'/>;

        case 'women\'s clothing':
            return <img src={womenslClothing} alt='womens clothing'/>;

        default:
            return null;
    }
}

export default ImageGlobalSelector