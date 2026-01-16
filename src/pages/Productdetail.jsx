
import { useContext } from 'react';
import { HiPlusSm } from 'react-icons/hi';
import { TiMinus } from 'react-icons/ti';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';

function Productdetail() {
    const { state } = useLocation();
    const {dispatch} = useContext(CartContext)    // for providing data for global varible,,, through dispatch
    console.log(state);
    return (
        <div className=" p-5 " >
            <div className="  rounded-sm   first  mt-10 w-[90%] m-auto  p-9 bg-white flex  gap-5 ">
                <div>
                    <img className="w-97  rounded-sm " src={state?.image} alt="" />
                </div>
                <div className="p-4  space-y-10  " >
                    <h1 className="text-3xl"    >{state.name}</h1>
                    <h1 className="text-3xl"    >{state.rating}(rating)</h1>
                    <h1 className="text-3xl  text-orange-500 font-bold "    >Rs.{state.caloriesPerServing}</h1>

                    <div className="flex  text-xl items-center gap-x-4 p-1" >
                        <p>Quantity</p>
                        <button className="bg-gray-400 p-2 rounded-sm  "  >
                            <TiMinus />
                        </button>
                        <p className=" text-2xl" >1</p>
                        <button className="bg-gray-400 p-2    rounded-sm  "  >
                            <HiPlusSm />
                        </button>
                    </div>

                    <div className="space-x-3  w-[500px]" >
                        <button className="bg-[#2abbe8]    h-16 p-2 rounded-sm w-60 text-white text-2xl"  >Buy Now</button>
                        <button 
                         onClick={()=>{
                            dispatch({
                                type:"addToCart",     //add to cart buton click garda data dispatch ko through uta janxa 
                                payload: state,
                            });
                         }}
                        className="bg-orange-500  h-16  p-2 rounded-sm w-60 text-white text-2xl"  >Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="flex  bg-white w-[90%]  m-auto mt-5 p-9">Description
                <h1 className='text-2xl mt-3 '> Ingredients{state.ingredients}</h1>
                <h1 className='text-sm mt-2'>Instructions {state.instructions}</h1>


                ingredients


            </div>
        </div>
    );
}

export default Productdetail
