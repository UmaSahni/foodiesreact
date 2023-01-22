import { Box,Button,Image, Text,Grid, GridItem } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../../Context/Context'
import MenuBox from './MenuBox'

const Burger = () => {
  const [data, setData ] = useState([])
  useEffect(()=>{
  axios.get("http://localhost:8080/products")
  .then((res)=>setData(res.data))
  },[])
 
 
  const Globalcontext = useContext(CartContext)
  const dispatch = Globalcontext.dispatch
  // console.log(Globalcontext)
  return (
    <div>
      <MenuBox/>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {
        data?.map((item)=>{
          // console.log(item, "This is item")
          item.quantity=1;
          item.product = "burger"
          return (
            
            <GridItem boxShadow='base' p='6' rounded='md' bg='white' margin={"auto"} key={item.id} >
              <Link to={`/burger/${item.id}`} >
              <Image  src = {item.images[0].sm}/>
              <Box textAlign={"center"} >
              <Text>{item.name} </Text>
              <Text> {item.price} </Text>
              </Box>
              </Link>
              <Box textAlign={"center"}>
              <Button 
               bg={'#dc0333'}
               color={'white'}
               _hover={{
                 bg: 'red',
               }}
              onClick={()=>dispatch({type:"ADD", payload:item})} >Order Now</Button>
              </Box>
              
            </GridItem>

          )
        })
      }
      </Grid>
    </div>
  )
}

export default Burger