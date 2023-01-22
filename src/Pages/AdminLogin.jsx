import { useContext, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import  { Temp } from "../Context/TempContext";
import { Navigate } from "react-router-dom";


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [login,setLogin] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword);
  
  const Globalcontext = useContext(Temp)
  const state = Globalcontext.state
  const dispatch = Globalcontext.dispatch
  console.log(Globalcontext)
  const handleClick = (e) =>{
   e.preventDefault()
  
  if(email=="admin" && password=="uma"){
    dispatch({type:"ADMINLOGIN"})
    setLogin(true)
    console.log("yes")
  }
  else{
    console.log("No")
  }


  
  }
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="70vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="red.500" />
        <Heading color="red.500">Welcome Admin </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="text" value={email} placeholder="email address" onChange={(e)=>setEmail(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="red"
                width="full"
                onClick={handleClick}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Login as Admin?{" "}
        
          Sign In
        
      </Box>
      {
        login?<Navigate to="/carrers"/>: <Text> You Must Login With Correct Credentials </Text>
      }
    </Flex>
  );
};

export default AdminLogin;
