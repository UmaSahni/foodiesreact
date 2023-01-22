import { Box, Image, Text,Grid,GridItem, Button } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/Context'
import MenuBox from './MenuBox'

const Dessert = () => {
  
 
 const [data,setData] = useState([])
useEffect(()=>{
axios.get("http://localhost:8080/dessert")
.then((res)=>{ console.log(res.data)
 return setData(res.data)})
},[])
const Globalcontext = useContext(CartContext)
const dispatch = Globalcontext.dispatch
console.log(Globalcontext)
  return (
    <div>
      <MenuBox/>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>     
{
  data?.map((item)=>{
  item.product = "dessert"
  return  <GridItem margin={"auto"} key={item.id} boxShadow='base' p='6' rounded='md' bg='white' >
      <Image src={item.img} alt = {item.name} width="300px" />
      <Box textAlign={"center"} >
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Button 
       bg={'#dc0333'}
       color={'white'}
       _hover={{
         bg: 'red',
       }}
      onClick={()=>dispatch({type:"ADD", payload:item})} >Order Now</Button>
      </Box>
    </GridItem>
  })
}
</Grid>
    </div>
  )
}

export default Dessert