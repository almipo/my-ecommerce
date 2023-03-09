import React from 'react'
import { Button, Stack } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import Brand from './Brand'



const NavBar = () => {
    return (
        <>
            <div className='navbar'> 
                <Link  to={"/"}>
                <Brand/>
                </Link>
            
                <Stack direction='row' spacing={4} align='center'>
                    <Link to = {"/catalogo"}>
                    <Button colorScheme='teal' variant='ghost'>
                        CATALOGO
                    </Button>
                    </Link>
                    <Link to = {`/category/${"1"}`}>
                    <Button colorScheme='teal' variant='ghost'>
                        PRODUCTO1
                    </Button>
                    </Link>
                    <Link to = {`/category/${"2"}`}>
                    <Button colorScheme='teal' variant='ghost'>
                        PRODUCTO2
                    </Button>
                    </Link>
                    <Link to = {`/category/${"3"}`}>
                    <Button colorScheme='teal' variant='ghost'>
                        PRODUCTO3
                    </Button>
                    </Link>
                </Stack>
                <div className='cardwidget'>
                <Link to ={"/cart"}>
                <CartWidget />
                </Link>
                    
                </div>

            </div>
        </>
    )
}

export default NavBar