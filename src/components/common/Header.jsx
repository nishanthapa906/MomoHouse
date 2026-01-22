import { NavLink } from "react-router-dom";
import { AiOutlineTikTok } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";

import momoImg from "../../assets/images/momo.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";
function Header() {
  const { user, isAuthenticated, logout } = useAuth0();

  const { state } = useContext(CartContext);
  let totalItem = state.cartItem?.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  return (
    <nav className=" parent       flex    shadow-xl px-4 p-8   justify-around  items-center  ">
      <div className="home  ">
        <NavLink to="/" className="flex  items-center  gap-x-2">
          <img width={30} src={momoImg} alt="" />
          <h1 className="text-2xl font-bold   text-[#0C6967]   ">momos</h1>
        </NavLink>
      </div>
      <div className="links  text-xl   flex items-center  gap-x-5">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/services">Our Services</NavLink>
        <NavLink to="/allergyAdvice">Allergy Advice</NavLink>
        <NavLink to="/cart" className="relative">
          <p className="bg-orange-500 p-2    absolute bottom-5 left-1 rounded-full h-7 w-7  flex justify-center items-center text-sm text-white  ">
            {" "}
            {totalItem}
          </p>
          <FaCartArrowDown size={26} />
        </NavLink>
      </div>

      <div className="contact      gap-4 flex  justify-end items-center">
        <NavLink to="https://www.tiktok.com/en/" target="_blank">
          <AiOutlineTikTok size={25} />
        </NavLink>
        <NavLink to="https://www.tiktok.com/en/" target="_blank">
          <RiInstagramLine size={25} />
        </NavLink>
        <NavLink to="https://www.tiktok.com/en/" target="_blank">
          <FaFacebook size={25} />
        </NavLink>
        <NavLink
          className="bg-[#D95103]  text-xl   text-white  p-1.5   rounded-4xl w-28 text-center  "
          to="/contact"
        >
          Contact
        </NavLink>
      </div>

      <div className="profile   relative group     flex items-center  gap-x-2 ">
        {isAuthenticated && user ? (
          <img className="w-12.5   rounded-full " src={user?.picture} />
        ) : (
          <img
            className="rounded-full  border"
            width={50}
            src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
            alt="User image"
          />
        )}
        <div className="hidden   w-28  absolute top-11   -right-10 bg-gray-100  shadow-2xl z-50 p-6   group-hover:flex flex-col  ">
          {isAuthenticated && user ? (
            <div  className="space-y-3" >
              <NavLink
                className="hover:underline text-md hover:font-bold"
                to="/profile"
              >
                Profile
              </NavLink>


              <button 

              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              
              
              className="bg-red-600 mt-3 p-2 text-white" >Logout</button>
            </div>
          ) : (
            <>
              <NavLink
                className="hover:underline text-md hover:font-bold"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="hover:underline text-md hover:font-bold"
                to="/register"
              >
                Register{" "}
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;