import { FormControl, FormLabel, Input, Select, Button, Badge } from "@chakra-ui/react";
import { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { AddressContext } from "../../Context/Address";
import { Temp } from "../../Context/TempContext";
import PayCheck from "./PayCheck";

function PaymentPage() {
    const [pay,setpay] = useState(false)
    const tempstate = useContext(AddressContext)
    const state = tempstate.state
    const dispatch = tempstate.dispatch
    console.log(tempstate, "This is temp state")
    const handleSubmit = (event) => {
    console.log(pay, "This is pay")
    event.preventDefault();
    // Perform form submission here (i.e. send data to server)
    setpay(true)
    console.log("setpay","Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="name">Name on Card</FormLabel>
        <Input id="name" type="text" placeholder="John Doe"  onChange={(e)=>dispatch({type:"NAME", payload:e.target.value})}  />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="card-number">Card Number</FormLabel>
        <Input id="card-number" type="text" placeholder="**** **** **** 1234" onChange={(e)=>dispatch({type:"CardNO", payload:e.target.value})} />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="expiry-date">Expiry Date</FormLabel>
        <Input id="expiry-date" type="text" placeholder="MM/YY" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="cvv">CVV</FormLabel>
        <Input id="cvv" type="text" placeholder="***" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="card-type">Card Type</FormLabel>
        <Select id="card-type" placeholder="Select card type">
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
          <option value="amex">American Express</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="address1">Address Line 1</FormLabel>
        <Input id="address1" type="text" placeholder="Street address" onChange={(e)=>dispatch({type:"ADDRESSLINE1",payload:e.target.value})} />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="address2">Address Line 2</FormLabel>
        <Input id="address2" type="text" placeholder="Apartment, suite, unit, etc." />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="city">City</FormLabel>
        <Input id="city" type="text" placeholder="City" onChange={(e)=>dispatch({type:"CITY",payload:e.target.value})}  />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="state">State/Province</FormLabel>
        <Input id="state" type="text" placeholder="State/Province" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="zip">Postal/Zip Code</FormLabel>
        <Input id="zip" type="text" placeholder="Postal/Zip Code" onChange={(e)=>dispatch({type:"ZIP",payload:e.target.value})} />
      </FormControl>

      <Button mt={4} variantColor="teal" type="submit">
        Submit Payment
      </Button>
      {
        pay? <Badge margin={"20px"} variant='solid' colorScheme='green'>
        Payment Completed
      </Badge>  : <Badge  margin={"20px"} colorScheme='red'>Payment Not Complete</Badge>
        // if(pay==true){
        //    
        // }
      }
       
    </form>
    
  );
}
export default PaymentPage
