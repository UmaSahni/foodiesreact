import { Box, Button, Image,SimpleGrid,Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'


import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/Context'
import MenuBox from './MenuBox'

const Food = () => {
  const [data, setData] = useState([])
useEffect(()=>{
  axios.get("https://motionless-red-meerkat.cyclic.app/food")
  .then((res)=>{ 
    return setData(res.data )})
},[])
console.log(data)
const Globalcontext = useContext(CartContext)
  const dispatch = Globalcontext.dispatch
  return (
    
    <div>
      <MenuBox/>
      <Box>
      <SimpleGrid  spacing={8}  minChildWidth={"350px"} >
      {
        
        data.length > 0 && data.map((item)=>{
        item.quantity = 1
        item.product = "drinks" 
        return ( 
           
            <Box boxShadow='base' p='6' rounded='md' bg='white' key={item.id} margin="auto"  >
          
            <Image src={item.img} alt={item.cocktail_name} width={"200px"} />
            <Box textAlign={"center"} >
            <Text>{item.cocktail_name}</Text>
            <Text> $ {item.price}</Text>
            <Text>{item.spirit_id}</Text>
          <Button 
           bg={'#dc0333'}
           color={'white'}
           _hover={{
             bg: 'red',
           }}
          onClick={()=>dispatch({type:"ADD",payload:item})} >Order Now</Button>
          </Box>
         
        </Box>
      
          )
        })
          
      }
     </SimpleGrid>
     </Box>
    </div>
  )
}

export default Food