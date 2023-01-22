import { Box,Flex, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/Context'
import { Temp } from '../Context/TempContext'
import img1 from "./Images/logofoo.jpg"
const Navbar = () => {
  const GlobalContext = useContext(CartContext)
  const state = GlobalContext.state
  // console.log(state,"This is state")
 const tempcontext = useContext(Temp)
 const Isauth = tempcontext.state.isAuth
 const admin = tempcontext.state.admin
  // console.log(admin,"THIS IS ADMIN")
  const obj = [
    { path:"/", element:"Home"},
    {path: "/menu", element:"Menu"},
   
    { path:"/about", element:"About"},
   
    {path:"/cart",element:`Cart ->  ${state.length > 0 ? state.length : "" }`},
    { path:"/login", element:  Isauth == true ?"Hi eve!":  "Login"   },
    { path:"/carrers", element: admin? "Admin" : ""},
  ]
  
  
  return (
    <Box>
    <Flex 
    alignItems='center'
    gap='1' 
    justifyContent={"space-around"}
    boxShadow='base'  rounded='md' bg='white'
    
    >
<Link to={"/"} >
  <Image width={"60px"} src={img1} />
</Link>
  {
    obj.map((el)=><Link key={el.path} to={el.path} >{el.element}</Link>)
  
  }

    </Flex>
    </Box>
  )
  
}

export default Navbar