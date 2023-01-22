import React from 'react';
import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

import ProductList from '../Components/ProductList';
import Address from '../Components/Address';
import AddProduct from '../Components/AddProduct';




export default function Careers() {
  
  return (
    <Box display={"flex"} minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      
     
      <Box display={"flex"}      >
      <ProductList/>
      </Box>
      <Box display={"flex"} justifyContent="center" width="100%"     >
        <Address/>
      {/* <ProductList/> */}
      
      </Box>
    </Box>
  );
}


