import { useLocation, useNavigate } from "react-router-dom";
import { TiMinus } from "react-icons/ti";
import { HiPlusSm } from "react-icons/hi";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";
function ProductDetail() {

  const [qty,setQty]=useState(1)

  const navigate=useNavigate()
  const { state } = useLocation();

  const { dispatch } = useContext(CartContext);

  return (
    <div className=" p-5 ">
      <div className="  rounded-sm   first  mt-10 w-[90%] m-auto  p-9 bg-white flex  gap-5 ">
        <div>
          <img className="w-97  rounded-sm " src={state?.image} alt="" />
        </div>
        <div className="p-4  space-y-10  ">
          <h1 className="text-3xl">{state.name}</h1>
          <h1 className="text-3xl">{state.rating}(rating)</h1>
          <h1 className="text-3xl  text-orange-500 font-bold ">
            Rs.{state.caloriesPerServing}
          </h1>
          <div className="flex  text-xl items-center gap-x-4 p-1">
            <p>Quantity</p>
            <button
            onClick={()=>{

              if(qty>1){
             setQty(qty-1)

              }
            }}
            
            className="bg-gray-400 p-2 rounded-sm  ">
              <TiMinus />
            </button>
            <p className=" text-2xl">{qty}</p>
            <button 
            
            onClick={()=>{
              setQty(qty+1)
            }}
            className="bg-gray-400 p-2    rounded-sm  ">
              <HiPlusSm />
            </button>
          </div>
          <div className="space-x-3  w-125">
            <button

            onClick={() => {
                  navigate("/payment", { state: qty*state.caloriesPerServing});
                }}
            
            
            className="bg-[#2abbe8]    h-16 p-2 rounded-sm w-60 text-white text-2xl">
              Buy Now
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: "addToCart",
                  payload: state,
                });
              }}
              className="bg-orange-500  h-16  p-2 rounded-sm w-60 text-white text-2xl"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white w-[90%]  m-auto mt-5 p-9">Description </div>
    </div>
  );
}

export default ProductDetail;