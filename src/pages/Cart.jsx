import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { useNavigate } from "react-router-dom";
import { HiPlusSm } from "react-icons/hi";
import { TiMinus } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

function Cart() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(CartContext);
  console.log(state.cartItem);
  return (
    <main className="  mt-10   m-auto  ">
      {state?.cartItem?.length > 0 ? (
        <div className="parent  flex  gap-x-6 flex-wrap p-10 ">
          <section className="w-[65%]    space-y-5 ">
            {state?.cartItem?.map((item) => {
              return (
                <div
                  key={item.id}
                  className=" hover:shadow-2xl  bg-white  shadow-gray-600 flex  justify-between pr-10 pl-5   h-32  items-center shadow rounded-2xl p-2"
                >
                  <div className="flex items-center   gap-x-4 ">
                    <img
                      className=" w-20 rounded-2xl "
                      src={item.image}
                      alt="product_image"
                    />
                    <h1 className="text-xl   w-72 ">{item.name}</h1>
                  </div>

                  <div className="space-y-3">
                    <h1 className="text-xl">Rs.{item.caloriesPerServing}</h1>

                    <button>
                      <MdDelete size={35} color="red" />
                    </button>
                  </div>

                  <div className="flex  text-xl items-center gap-x-4 p-1">
                    
                    <button
                        onClick={() => {
                        dispatch({ type: "decrement", payload: { id: item.id } });
                      }}
                      className="bg-gray-400 p-2 rounded-sm  "
                    >
                      <TiMinus />
                    </button>
                    
                    
                    <p className=" text-2xl">1</p>
                    <button
                    
                     onClick={() => {
                        dispatch({ type: "increment", payload: { id: item.id } });
                      }}
                      className="bg-gray-400 p-2 rounded-sm  ">
                      <HiPlusSm />
                    </button>
                  </div>
                </div>
              );
            })}
          </section>

          <section className="   h-[400px]    space-y-4  w-[30%] bg-white p-5 ">
            <h1  className="text-2xl font-bold" >Order summary</h1>
            <div  className="flex justify-between text-xl"  >
              <h1> Subtotal (0 items)</h1>
              <h1>Rs. 0</h1>
            </div>
            <div  className="flex justify-between text-xl"  >
              <h1> Shipping Fee</h1>
              <h1>Rs. 0</h1>
            </div>

            <div   className="flex gap-x-2 p-5  " >
              <input   className="border p-2 rounded-sm   outline-none "  placeholder="Enter  Voucher Code "  type="text" />
              <button   className="bg-blue-400 w-28 text-white rounded-sm" >APPLY</button>
            </div>

            <div  className="flex justify-between text-xl"  >
              <h1> Total</h1>
              <h1>Rs.0</h1>
            </div>

            <div>
              <button  className="    bg-amber-700 p-3 text-white text-2xl w-full ">Procced To Check Out</button>
            </div>
          </section>
        </div>
      ) : (
        <section className="w-96 m-auto mt-52 p-5 flex  text-xl font-semibold font-mono flex-col justify-center items-center gap-y-5  ">
          <h1> There are no items in this cart</h1>
          <button
            onClick={() => {
              navigate("/menu");
            }}
            className="border p-3 hover:bg-orange-200"
          >
            Continue Shopping
          </button>
        </section>
      )}
    </main>
  );
}

export default Cart;