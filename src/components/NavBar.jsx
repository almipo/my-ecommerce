import React from 'react'
import CardWidget from './CardWidget'
import { Button, Stack } from '@chakra-ui/react'



const NavBar = () => {
    return (
        <>
            <div className='navbar'> 

                <h1 className='brand'>LOGO DE LA MARCA</h1> {/*nombre y logo a definir*/}
            
                <Stack direction='row' spacing={4} align='center'>
                    <Button colorScheme='teal' variant='ghost'>
                        PRODUCTO1
                    </Button>
                    <Button colorScheme='teal' variant='ghost'>
                        PRODUCTO2
                    </Button>
                    <Button colorScheme='teal' variant='ghost'>
                        PRODUCTO3
                    </Button>
                    <Button colorScheme='teal' variant='ghost'>
                        PRODUCTO4
                    </Button>
                </Stack>
                <div className='cardwidget'>
                
                <CardWidget />
                    
                </div>

            </div>
        </>
    )
}

export default NavBar