import React from 'react'
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Box
  } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Stack  minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              
             
            <Text color={'red'} as={'span'}>
            Partners in
              </Text>
              <br />{' '}
              <Text color={'red'} as={'span'}>
              deliciousness with foodies
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'#dc0333'}
                color={'white'}
                _hover={{
                  bg: 'red',
                }}>
                Order Pickup
              </Button>
              <Button rounded={'full'}>Order Delivery</Button>
            </Stack>
          </Stack>
        </Flex>
       
        <Flex flex={1}>
       
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            width="100%"
           height={"100%"}
            zIndex={"-1"}
            src={
              'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1918791242001/4e8c6abe-0587-4ba8-b47e-a7646afb2aa5/afe197c5-8fba-42e5-a569-eb5cf142de1d/1280x720/match/image.jpg'
            }
          />
        </Flex>
        
      </Stack>
  )
}

export default Hero