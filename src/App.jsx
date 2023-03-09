import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {

  
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
        <NavBar/>
        
        {/*}<div>
        </div>
        <div className='itemList'>
          <ItemListContainer greeting={"BIENVENIDO A LA PAGINA"} />
        </div>
  {*/}
      <Routes>
          <Route exact path="/" element= {<Home/>}/>
          <Route exact path="/catalogo" element= {<ItemListContainer/>}/>
          <Route exact path="/category/:category" element= {<ItemListContainer/>}/>
          <Route exact path="/item/:id" element= {<ItemDetailContainer/>}/>
          <Route exact path="/cart" element= {<Cart/>}/>
      </Routes>

        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App

