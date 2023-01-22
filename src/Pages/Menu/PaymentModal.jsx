import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import PaymentPage from "./PaymentPage"


function PaymentModal() {
    const [pay,setpay] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}>Place Order</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
                <PaymentPage/>
              {/* "Thank you so much for choosing to shop with us at our food store. We appreciate your patronage and are dedicated to providing you with the freshest and highest quality products". */}
              </Text>
              {/* <Lorem count={2} /> */}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={()=>setpay(true)} >Continue Shoping</Button>
            {
                pay==true?<Navigate to ="/"/>:""
            }
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default PaymentModal