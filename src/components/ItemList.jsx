import React from 'react'
import Item from './Item'
import { Container } from '@chakra-ui/react'



const ItemList = ({data}) => {
  return (
    <>
      
        {data?.map ((data)=>{  
          return(        
          <Item
          key={data.id}
          id={data.id}
          name={data.producto}
          precio={data.precio}
          stock={data.stock}
          category={data.category}
          img={data.img}
          description={data.descripcion}
        />)
          })}
        
      </>
    )} 


export default ItemList