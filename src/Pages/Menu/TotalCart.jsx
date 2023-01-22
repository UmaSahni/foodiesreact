import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import PaymentModal from './PaymentModal'

export const TotalCart = ({total}) => {
   const [code,setcode] = useState("") 
   const discount = (total*25)/100
   console.log(discount,"This is discount")
   console.log(code, "this is code")
  return (
    <Box  boxShadow='xs' p='6' rounded='md' bg='white' margin="auto"  width={{lg:"50%", sm:"100%"}}  >
    <Text textAlign={"center"} >Order Summary</Text>
    <Box display={"flex"} justifyContent="space-around"   >
        <Box>
           <Text>Subtotal</Text>
           <Text>Shipping + Tax</Text>
           <Text>Coupon Code</Text>
           <Text>Total Price </Text>
        </Box>
        <Box>
           <Text>${total}</Text>  
            <Text>$5</Text>
            <Input placeholder='add coupen code' value={code} onChange={(e)=>setcode(e.target.value)} ></Input>
            {/* <Text>currently unavailable </Text> */}
            
            <Text>${code=="foodies"? (total-discount)+5 : total+5}</Text>
            {/* <Button  >Pay Now</Button> */}
            <PaymentModal/>
        </Box>
       
    </Box>
    
    </Box>
  )
}

