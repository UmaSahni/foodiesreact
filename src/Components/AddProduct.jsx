import { Box, Button, Center, Divider, Heading, Input } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const [img, setImage] = useState("")
  const [quantity,setQuentity] = useState(1)
  const handleClick = () =>{
    const obj = {
        name,price,img,quantity
      }
    axios({
        method:"post",
        url:"https://motionless-red-meerkat.cyclic.app/dessert",
        data:obj
    })
    .then((res)=>console.log(res))
  }
 
    return (
    <Box>
    <Heading> Add Products </Heading>
    <Center height='10px'>
    <Divider orientation='vertical' />
    </Center>
    
    <Input placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
    
    <Center height='50px'>
    <Divider orientation='vertical' />
    </Center>
    
    <Input placeholder='Price' type={"number"} value={price} onChange={(e)=>setPrice(e.target.value)} ></Input>
    
    <Center height='50px'>
    <Divider orientation='vertical' />
    </Center>
   
    <Input placeholder='Image' value={img} onChange={(e)=>setImage(e.target.value)} />
    
    <Center height='50px'>
   <Divider orientation='vertical' />
   </Center>
   
   <Button onClick={handleClick} >Add</Button>
    </Box>
  )
}

export default AddProduct