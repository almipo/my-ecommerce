import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ReactDOM  from 'react-dom'



const Item = ({id, name, stock, category, img, description}) => {

  return (
  
    <div>
      <div key={id}>
        
     <Card maxW='sm'>
        <CardBody>
          <Image
            src={img}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
            <Text>{description}</Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='ghost' colorScheme='blue'>
              DESCRIPCION
            </Button>
          </ButtonGroup>
        </CardFooter>
  </Card>

</div>
</div>

  );
  
};

export default Item