import { Badge, Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartContext } from '../Context/Context'
import {  Button, Card, CardBody, CardFooter, Center, Divider, Image,Stack,Text} from '@chakra-ui/react'
import { Temp } from '../Context/TempContext'
const ProductList = () => {
    const Globalstate = useContext(CartContext)
    const state = Globalstate.state
    const dispatch = Globalstate.dispatch
    const total = state.reduce((acc,item)=>{
        return Math.floor (acc+item.quantity*item.price)
        },0)
    const mystate = useContext(Temp)
    const dis = mystate.dispatch
    const sta = mystate.state
    console.log(sta)
    // console.log(mystate.state,sta,"This is mystate")
    return (
       <Box>
        {
            state.map((item)=>{
                if(item.product === "burger" ){
                    return(
                        <Box>
                        <Card
                        margin={"auto"}
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        width={{lg:"100%", sm:"100%"}}
                        key={item.id} >
                            <Image 
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src = {item.images[0].sm} alt={item.title} width="100px"  ></Image>
                            <Stack textAlign={"center"} display="flex" justifyContent={"center"} alignItems={"center"}  >
                            
                            <Text p={"20px"}  >   {item.name} </Text>
                            <Text>   $ {item.price*item.quantity} </Text>
                            
                            </Stack>
                            <CardBody alignItems={"center"} display="flex" justifyContent={"flex-end"}  >
                            {/* <Button onClick={()=>dispatch({type:"INC",payload:item})} >+</Button> */}
                            <Text>Quentity: {item.quantity}</Text>
                            <Badge  variant='outline' margin={"6px"} colorScheme='green'>
                                Order in Progress
                            </Badge>
                            {/* <Button onClick={()=>{
                                if(item.quantity>1){
                                    dispatch({type:"DEC",payload:item})
                                }
                                else{
                                    dispatch({type:"REMOVE",payload:item})
                                }
                            }} >-</Button> */}
                             </CardBody>
                             <CardFooter>
                            <Button onClick={()=>dispatch({type:"REMOVE",payload:item})} >x</Button>
                            </CardFooter>
                            
                        </Card>
                            <Center height='20px'>
                            <Divider orientation='vertical' />
                            </Center>
                        </Box>
    
                    )
                }
                if(item.product==="dessert"){
                    return (
                        <Box>
                        <Card
                        margin={"auto"}
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        width={{lg:"100%", sm:"100%"}}
                        key={item.id} >
                            <Image 
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src = {item.img} alt={item.name} width="100px"  ></Image>
                            <Stack textAlign={"center"} display="flex" justifyContent={"center"} alignItems={"center"}  >
                            
                            <Text p={"20px"}  > {item.name} </Text>
                            <Text>  $ {item.price*item.quantity} </Text>
                            
                            </Stack>
                            <CardBody alignItems={"center"} display="flex" justifyContent={"flex-end"} >
                            {/* <Button onClick={()=>dispatch({type:"INC",payload:item})} >+</Button> */}
                            {/* <Text>{item.quantity}</Text> */}
                            <Text>Quentity: {item.quantity}</Text>
                            <Badge  variant='outline' margin={"6px"} colorScheme='green'>
                                Order in Progress
                            </Badge>
                            {/* <Button onClick={()=>{
                                if(item.quantity>1){
                                    dispatch({type:"DEC",payload:item})
                                }
                                else{
                                    dispatch({type:"REMOVE",payload:item})
                                }
                            }} >-</Button> */}
                             </CardBody>
                             <CardFooter>
                            <Button onClick={()=>dispatch({type:"REMOVE",payload:item})} >x</Button>
                            </CardFooter>
                        </Card>
                        <Center height='20px'>
                            <Divider orientation='vertical' />
                            </Center>
                        </Box>
                    )
                }
                //new item
                if( item.product = "pizza"){
                    return(
                        <Box>
                        <Card
                        margin={"auto"}
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        width={{lg:"100%", sm:"100%"}}
                        key={item.id} >
                            <Image 
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src = {item.img} alt={item.name} width="100px"   ></Image>
                            <Stack textAlign={"center"} display="flex" justifyContent={"center"} alignItems={"center"}  >
                            
                            <Text p={"20px"}  >   {item.name || item.cocktail_name} </Text>
                            <Text>   $ {item.price*item.quantity} </Text>
                            
                            </Stack>
                            <CardBody alignItems={"center"} display="flex" justifyContent={"flex-end"}  >
                            <Text>Quentity: {item.quantity}</Text>
                            {
                                sta.order ? <Badge  variant='outline' margin={"6px"} colorScheme='green'>
                                Order in Progress
                            </Badge> : <Badge  variant='outline' margin={"6px"} colorScheme='green'>
                            Order in Progress
                            </Badge>
                            }
                            
                             </CardBody>
                             <CardFooter>
                            <Button onClick={()=>{console.log("Yes"); dis({type:"NOTSTOCK",payload:item})  }} >x</Button>
                            
                            </CardFooter>
                        </Card>
                        <Center height='20px'>
                            <Divider orientation='vertical' />
                            </Center>
                        </Box>
                    )
                }
                // if(item.product = "drinks"){
                //     return(
                //         <Box>
                //         <Card
                //         margin={"auto"}
                //         direction={{ base: 'column', sm: 'row' }}
                //         overflow='hidden'
                //         variant='outline'
                //         width={{lg:"80%", sm:"100%"}}
                //         key={item.id} >
                //             <Image 
                //             objectFit='cover'
                //             maxW={{ base: '100%', sm: '200px' }}
                //             src = {item.img} alt={item.cocktail_name}  ></Image>
                //             <Stack textAlign={"center"} display="flex" justifyContent={"center"} alignItems={"center"}  >
                            
                //             <Text p={"20px"}  >   {item.name} </Text>
                //             <Text>   $ {item.price*item.quantity} </Text>
                            
                //             </Stack>
                //             <CardBody alignItems={"center"} display="flex" justifyContent={"flex-end"}  >
                //             <Button onClick={()=>dispatch({type:"INC",payload:item})} >+</Button>
                //             <Text>{item.quantity}</Text>
                           
                //             <Button onClick={()=>{
                //                 if(item.quantity>1){
                //                     dispatch({type:"DEC",payload:item})
                //                 }
                //                 else{
                //                     dispatch({type:"REMOVE",payload:item})
                //                 }
                //             }} >-</Button>
                //              </CardBody>
                //              <CardFooter>
                //             <Button onClick={()=>dispatch({type:"REMOVE",payload:item})} >x</Button>
                //             </CardFooter>
                //         </Card>
                //         <Center height='20px'>
                //             <Divider orientation='vertical' />
                //             </Center>
                //         </Box>
                //     )
                // }
            })
            }
        </Box>
  )
}

export default ProductList