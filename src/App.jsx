import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'


const App = () => {

  
  return (
    <>
      <ChakraProvider>
        
        <div>
          <NavBar/>
        </div>
      
        <div className='itemList'>
          <ItemListContainer greeting={"BIENVENIDO A LA PAGINA"} />
        </div>
      
      </ChakraProvider>
    </>
  )
}

export default App

