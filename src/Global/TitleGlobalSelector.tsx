import React from 'react'

type Props = {
    title:string | undefined,
}

const TitleGlobalSelector = ({title}: Props) => {

    switch(title){

        case 'electronics' :
            return <>Электроника</>;

        case 'jewelery' :
            return <>Ювелирные изделия</>;

        case 'men\'s clothing' :
            return <>Мужская одежда</>;

        case 'women\'s clothing' :
            return <>Женская одежда</>;

        default:
            return null;
    }
}

export default TitleGlobalSelector