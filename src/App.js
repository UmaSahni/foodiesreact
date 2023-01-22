import { Center, Divider } from "@chakra-ui/react";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";



function App() {
  
  
  
  return (
   <div className="App">
    
    <NavBar/>
  <Center height='10px'>
  <Divider orientation='vertical' />
  </Center>
    <AllRoutes/>
    <Center height='20px'>
  <Divider orientation='vertical' />
  </Center>
    <Footer/>
    </div>
  );
}

export default App;
