import {
    Box
  } from '@chakra-ui/react';
import Private from '../Components/Private';


import RedButton from '../Components/RedButton';
import CurvedBox from './Home/CurvedBox';
import Hero from './Home/Hero';
import HorizontalBox from './Home/HorizontalBox';
  
  export default function Home() {
    return (
      <Box>
      <Hero/>
      <CurvedBox/>
      <HorizontalBox/>
      
    </Box>
    );
  }