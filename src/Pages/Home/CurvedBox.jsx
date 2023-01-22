import {
    Box,
    Button,
    Card,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import RedButton from '../../Components/RedButton';
  
  export default function CurvedBox() {
    return (
    <Card margin={"10%"}  gap={"2%"}  direction={{ base: 'column', md: 'row' }}    >
      <Stack minH={'40vh'} direction={{ base: 'column', md: 'row' }} backgroundColor={'#f4f8f9'}  rounded="3xl" >
        <Flex p={6} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Mac & Cheese
              </Text>
              <br />{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Pair your entrée and drink with the warm, melty Mac & Cheese, baked in-restaurant with a special blend of cheddar, Parmesan, and Romano.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <RedButton text = {" View Product"}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'red',
                }}>
             
              </RedButton>
             
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={2}>
          <Image
            alt={'Login Image'}
            objectFit="cover"
            roundedRight={"3xl"}
            src={
              'https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/CFA2212020-MacCheese-Module-Desktop_317x322V1.jpg?h=322&w=317&la=en'
            }
          />
        </Flex>
      </Stack>
{/* card-2 */}
      <Stack  direction={{ base: 'column', md: 'row' }} backgroundColor={'#f4f8f9'} rounded="3xl" >
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Chicken Tortilla Soup
              </Text>
              <br />{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Enjoy the perfect winter warm-up. Try a cupful of Chicken Tortilla Soup from now until April 1, 2023, while supplies last.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <RedButton text = {"View Product"}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
               
              </RedButton>
             
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={2}>
          <Image
            alt={'Login Image'}
            objectFit="cover"
            roundedRight={"3xl"}
            src={
              'https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/Product_Featured2_Desktop.png?h=322&w=318&la=en'
            }
          />
        </Flex>
      </Stack>
      </Card>
    );
  }