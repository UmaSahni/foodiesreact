import React from 'react'
import { createContext, useReducer } from 'react'

export const Temp = createContext()

const TempContext = ({children}) => {
const initial = {
    isAuth:false,
    admin:false
}
const reducer = (state, action) =>{
switch(action.type){
    case "LOGIN":{
        return {isAuth:true}
    }
    case "LOGOUT":{
        return {isAuth:false}
    }
    case "ADMINLOGIN":{
        return {admin:true}
    }
    
    default:return 0
}
}

 const [state, dispatch] = useReducer(reducer,initial)
   const info ={
    state, dispatch
   } 
return (
    <Temp.Provider value={info} >{children}</Temp.Provider>
  )
}

export default TempContext