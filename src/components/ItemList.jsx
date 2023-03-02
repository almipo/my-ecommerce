import React from 'react'
import Item from './Item'
import ReactDOM  from 'react-dom'
import { Container } from '@chakra-ui/react'

const ItemList = ({sartenes}) => {

  return (
    <>
    <Container>
        {sartenes.map ((sarten)=>{
          <Item
            key={sarten.id}
            id={sarten.id}
            name={sarten.producto}
            stock={sarten.stock}
            category={sarten.category}
            img={sarten.img}
            description={sarten.descripcion}
          />
        })}      
      </Container>
    </>
    )
  }
  

export default ItemList