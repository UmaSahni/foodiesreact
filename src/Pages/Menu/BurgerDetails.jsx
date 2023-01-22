import axios from "axios"
import { useEffect, useReducer, useState } from "react"
import { useParams } from "react-router-dom"
import SingleBurgerCard from "./SingleBurgerCard"

const initial = {
    loading:true,
    data:[],
    error:false
}
const reducer = (state, action) =>{
switch(action.type){
    case "FAILURE":{
       return {
        ...state,
        data:[],
        loading:false,
        error:"Something went wrong"

       }
    }
    case "SUCCESS":{
        return{
            ...state,
        data:action.payload,
        loading:false, 
        error:false
        }
    }
    
    
    default: throw new Error()
}
}

const BurgerDetails = () => {
const [state, dispatch] = useReducer(reducer, initial)
const {data,loading,error} = state
  
    const getData = async (id)=>{
    
    axios
    .get(`http://localhost:8080/products/${id}`)
    .then((res)=>{
        dispatch({type:"SUCCESS",payload: res.data});
        console.log(res.data)
    })
    .catch((error)=>{
        dispatch({type:"FAILURE",payload: error})
    })
    
  }  
useEffect(()=>{
    getData(id)
},[])

const { id } = useParams()
    // const {name, price, desc, veg, images:[{sm}]} = data
    // console.log(name, price, desc, veg, sm)
    return (
        
   <div>
     {
      loading?"Loading....":<SingleBurgerCard name = {data.name} image ={data.images[0].sm} price={data.price} desc={data.desc} ingredients = {data.ingredients} veg = {data.veg} data={data} 
      />
     }
    </div>
 
  )
}

export default BurgerDetails