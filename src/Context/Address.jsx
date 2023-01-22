import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'
export const AddressContext = createContext() 
const Address = ({children}) => {
const initial = {
    name:"",
    cardno:"",
    address1:"",
    city:"",
    zip:""
}
const reducer = (state, action) =>{
    switch(action.type){
       case "NAME":{
        return {
            ...state,
            name:action.payload
        }
       }
       case "CardNO":{
       return{
        ...state,
          cardno:action.payload
       }

       }
       case "ADDRESSLINE1":{
        return {
            ...state,
            address1:action.payload
        }
       }
       case "CITY":{
        return {
            ...state,
            city:action.payload
        }
       }
       case "ZIP":{
        return{
            ...state,
            zip:action.payload
        }
       }
       
       
        default: return state
    }
}
const [state,dispatch] =   useReducer(reducer,initial)
const info = {
    state,dispatch
}
    return (
    <AddressContext.Provider value = {info} >{children}</AddressContext.Provider>
  )
}

export default Address