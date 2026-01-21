import { useLocation } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

import CryptoJS from "crypto-js";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartProvider";
function Payment() {
     const {dispatch} = useContext(CartContext)   // for delteleting cart after payment success

  const {state}=useLocation()
  const transaction_uuid=uuidv4()
  const message=`total_amount=${state},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`
 const  hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
  const signature = CryptoJS.enc.Base64.stringify(hash);


  useEffect(()=>{
    dispatch({type:"clearAll"})   //for deleting cart after paymet success
  }, [])


  return (
    <div>
    <form className="bg-white flex  shadow-2xl justify-center gap-y-10 items-center flex-col p-10 w-96 m-auto mt-20" action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
        <input type="hidden" id="amount" name="amount" value={state} required/>
        <input type="hidden" id="tax_amount" name="tax_amount" value ="0" required/>
        <input type="hidden" id="total_amount" name="total_amount" value={state} required/>
        <input type="hidden" id="transaction_uuid" name="transaction_uuid" value={transaction_uuid} required/>
        <input type="hidden" id="product_code" name="product_code" value ="EPAYTEST" required/>
        <input type="hidden" id="product_service_charge" name="product_service_charge" value="0" required/>
        <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value="0" required/>
         <input type="hidden" id="success_url" name="success_url" value="http://localhost:5173/success" required/>
        <input type="hidden" id="failure_url" name="failure_url" value="http://localhost:5173/failure" required/> 
 
        <input type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required/>
        <input type="hidden" id="signature" name="signature" value={signature} required/>
        <h1 className=" text-red-600 font-semibold font-serif  text-5xl">Rs. {state}</h1>

        <input  className="text-2xl  bg-orange-500 p-3  text-white rounded-sm  w-32"  value="Submit" type="submit"/>
 </form>

      
    </div>
  )
}

export default Payment