import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AddressContext } from '../Context/Address'
import AddProduct from './AddProduct'

const Address = () => {
  const Address = useContext(AddressContext)
  console.log(Address.state.name, "This is address")
    return (
    <Box width={"90%"}  boxShadow='base' p='6' rounded='md' bg='white' >
    <Heading>Address Info </Heading>
    <Text>Name: {Address.state.name} </Text>
    <Text>Card Number : {Address.state.cardno}  </Text>
    <Text>Address: {Address.state.address1} </Text>
    <Text> City:{Address.state.city} </Text>
    <Text> Zip Code : {Address.state.zip} </Text>
    <Divider boxShadow='base'  rounded='md' bg='white'  />
    <AddProduct/>
    </Box>
  )
}

export default Address