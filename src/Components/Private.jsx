import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Temp } from '../Context/TempContext'

const Private = ({children}) => {
  const {state,dispatch} = useContext(Temp)
  console.log(state.isAuth, "This is private state")
    if(!state.isAuth){
      return  <Navigate to={"/login"} />
    }
    return children
}

export default Private