import React, { useContext } from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
  } from '@chakra-ui/react';
import { CartContext } from '../../Context/Context';

const SingleBurgerCard = ({name,image, veg, desc, ingredients,price,data}) => {
const item ={
    ...data,
    product:"burger",
    quantity:1
}
// console.log(item, "this is new data")
    // console.log(data, "this is data")
const Globalcontext = useContext(CartContext)
const dispatch = Globalcontext.dispatch
 
    return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={name}
            src={image}
            fit={"cover"}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}
              padding="10px"
              >
              
             Price: $ {price}
            </Text>
            
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
              <Text>{veg?"This is veg":"This is Non-veg"}</Text>  
            <VStack spacing={{ base: 3, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'18px'}
                fontWeight={'300'}>
              {desc}
              </Text>
              {/* <Text fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text> */}
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                {/* {veg?"This is veg":"This is Non-veg"} */}
                Ingredients:
              </Text>
              {/* <Text>{ingredients[0].name}</Text> */}

              <SimpleGrid columns={{ base: 1, lg:3, md: 2, sm:2 }} spacing={10}>
                {
                    ingredients.map((item)=>{
                     return   <Box>
                        <Text>{item.name}</Text>
                        <Image src = {item.img} width="100px" ></Image>
                        </Box>
                    })
                }
                {/* <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List> */}
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                   Calories:
                  </Text>{' '}
                  430
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Fat:
                  </Text>{' '}
                  21g
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Carbs:
                  </Text>{' '}
                 43g
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Protein:
                  </Text>{' '}
                  17g
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            // bg={useColorModeValue('gray.900', 'gray.50')}
            // color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            bg={'#dc0333'}
               color={'white'}
               _hover={{
                 bg: 'red',
               }}
            onClick={()=>dispatch({type:"ADD",payload:item})}
            >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            {/* <MdLocalShipping /> */}
            <Text>Availability may differ at different locations</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export default SingleBurgerCard