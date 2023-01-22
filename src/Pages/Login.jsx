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
  
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from "axios";
import  { Temp } from "../Context/TempContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AdminLogin from "./AdminLogin";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState("eve.holt@reqres.in")
  const [password,setPassword] = useState("cityslicka")
  const [login,setLogin] = useState("")
  const handleShowClick = () => setShowPassword(!showPassword);
  
  const Globalcontext = useContext(Temp)
  const state = Globalcontext.state
  const dispatch = Globalcontext.dispatch
  const obj = {email,password}
  // console.log(Globalcontext)
  const handleClick = (e) =>{
   e.preventDefault()
  
  

  axios({
    method:"post",
    url:"https://reqres.in/api/login",
    data: obj
  })
  .then((res)=>setLogin(res.data.token))

  
  
  
 
    dispatch({type:"LOGIN"})
 
  console.log(login) 

  // console.log(login)
    
  
   
  //  console.log("Form submited")
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
        <Heading color="red.500">Welcome</Heading>
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
        <Link to={"/adminlogin"} >
          Sign In
        </Link>
      </Box>
      {
        login?<Navigate to="/menu"/>: <Text> You Must Login With Correct Credentials </Text>
      }
    </Flex>
  );
};

export default Login;
