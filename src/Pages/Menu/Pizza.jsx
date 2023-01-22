import { Box, Button,Image,Text,GridItem,Grid, Heading } from '@chakra-ui/react'

import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/Context'
import MenuBox from './MenuBox'

const Pizza = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/pizza")
    .then((res)=>setData(res.data))
  },[])
  const GlobalContext = useContext(CartContext)
  const dispatch = GlobalContext.dispatch
  return (
    <div>
      <MenuBox/>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
{
  data?.map((item)=>{
    item.product = "pizza"
    return (
      <GridItem boxShadow='base' p='6' rounded='md' bg='white' margin ="auto" key={item.id} >
        <Image src={item.img} alt ={item.name} width="300px" height={"200px"} />
        <Box textAlign={"center"} >
        <Text
        
        
        >{item.name}</Text>
        <Text>$ {item.price}</Text>
        <Button
         bg={'#dc0333'}
         color={'white'}
         _hover={{
           bg: 'red',
         }}
        onClick={()=>dispatch({type:"ADD",payload:item})} >Order Now</Button>
        </Box>
      </GridItem>
    )
  })
}
    </Grid>
    </div>
  )
}

export default Pizza