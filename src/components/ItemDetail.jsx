import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'


const ItemDetail = ({data}) => {
  console.log(data)
  const {id} = useParams();

  const idFilter = data.filter((dat)=>dat.id==id)

  return (
    <>
   
    {idFilter.map ((dat)=>{  
              return(
                <div key = {dat.id}>
                  <Card maxW='sm'>
        <CardBody>
          <Image
            src={dat.img}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{dat.producto}</Heading>
            <Text>{dat.description}</Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Link to = {"/cart"}>
            <Button variant='ghost' colorScheme='blue'>
              agregar al carrito
            </Button>
            </Link>
            
          </ButtonGroup>
        </CardFooter>
  </Card>

            </div>
              )
          })}    
  </>
  )
}

export default ItemDetail