import { Box, Center, Divider, Flex } from '@chakra-ui/react'
import React from 'react'
import Burger from "./Burger"
import Dessert from './Dessert'
import Food from './Food'
import Pizza from './Pizza'
import { Link } from 'react-router-dom'

const MenuBox = () => {
  const obj = [
    {path:"/burger", element: "Burger"},
    {path:"/food", element: "Drinks"},
    {path:"/dessert", element: "Dessert"},
    {path:"/pizza", element: "Pizza"},
  ]
  
  
  return (
    <Box>
    <Flex 
    alignItems='center'
    gap='2' 
    justifyContent={"space-around"}
    padding={"4"} 
  //  position="fixed"
  //     top={100}
  //   width="100%" 
    boxShadow='xs' p='2' rounded='md' bg='white'
    maxW={"50%"}
    margin={'auto'}
    // display="none"
    >
      {
    obj.map((el)=><Link key={el.path} to={el.path} >{el.element}</Link>)
  
  }
  
    {/* <Burger/>
    <Food/>
    <Dessert/>
    <Pizza/>
     */}
    </Flex>
    <Center height='50px'>
  <Divider orientation='vertical' />
</Center>
    </Box>
  )
}

export default MenuBox