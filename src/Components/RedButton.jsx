import { Button } from '@chakra-ui/react'
import React from 'react'

const RedButton = ({text}) => {
  return (
    <Button
    rounded={'full'}
                bg={'#dc0333'}
                color={'white'}
                _hover={{
                  bg: 'red',
                }}
    > {text} </Button>
  )
}

export default RedButton