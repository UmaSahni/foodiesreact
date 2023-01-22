import React from 'react'
import { Button, Card, CardBody, CardFooter, Flex, Heading, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import RedButton from '../../Components/RedButton'
import { Link } from 'react-router-dom'
const HorizontalBox = () => {
  return (
    <Card 
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    margin={"10%"}
    rounded="20px"
  >
    
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '500px' }}
      src='https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/large-Spicy_Chicken-fullmenu-desktop.jpg?h=271&w=633&la=en'
      alt='Caffe Latte'
      flex={"1"}
    />
 {/* margin={"8"} */}
    <Stack>
      <CardBody margin={"50px"} >
        <Heading   size='md'>Hungry for more?</Heading>
        <Text size={"sm"} fontSize="1xl" >From breakfast items, party trays to packaged meals, Chick-fil-A® Catering has something for every occasion.</Text>
        
        
      </CardBody>
  
      <CardFooter margin={"50px"} >
      <Link to='/menu' >
      <RedButton  text={"View Full Menu"}  variant='solid' colorScheme='red'>
          
        </RedButton>
        </Link>
      </CardFooter>
    </Stack>
  </Card>
  )
}

export default HorizontalBox