import Menu from '../Pages/Menu'
import React from 'react'
import{Route,Routes} from "react-router-dom"
import About from '../Pages/About'
import Careers from '../Pages/Careers'
import Home from '../Pages/Home'
import Burger from '../Pages/Menu/Burger'
import Food from '../Pages/Menu/Food'
import Pizza from '../Pages/Menu/Pizza'
import Dessert from '../Pages/Menu/Dessert'
import Cart from '../Pages/Cart'
import BurgerDetails from '../Pages/Menu/BurgerDetails'
import Login from '../Pages/Login'
import Private from './Private'
import AdminLogin from '../Pages/AdminLogin'
const AllRoutes = () => {
 
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/carrers' element={<Careers/>} />
        <Route path='/menu' element={<Menu></Menu>} />
        <Route path='/login' element={<Login/>} />
       
        <Route path = "/cart" element={ <Private> <Cart/> </Private>     }/>
        <Route path='/adminlogin' element={<AdminLogin/>} />
        <Route path='/burger' element={<Burger/>} ></Route>
        <Route path='/burger/:id' element={<BurgerDetails/>}/>
        <Route path='/food' element={<Food/>} ></Route>
        <Route path= "/pizza" element={<Pizza/>}  />
        <Route path= "/dessert" element={<Dessert/>}  />
    </Routes>
  )
}

export default AllRoutes