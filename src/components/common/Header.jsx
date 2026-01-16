import { NavLink } from "react-router-dom";
import { AiOutlineTikTok } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";

import momoImg from "../../assets/images/momo.png";
function Header() {
  return (
    <nav className=" parent       flex    shadow-xl px-4 p-4   justify-around  items-center  ">
      <div className="home  ">
        <NavLink to="/" className="flex  items-center  gap-x-2">
          <img width={30} src={momoImg} alt="" />
          <h1 className="text-2xl font-bold">momos</h1>
        </NavLink>
      </div>
      <div className="links   flex items-center  gap-x-5">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/services">Our Services</NavLink>
        <NavLink to="/allergyAdvice">Allergy Advice</NavLink>
         <NavLink to="/cart">Cart</NavLink>
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
          className="bg-[#D95103] text-white  p-1.5  rounded-4xl w-20 text-center  "
          to="/contact"
        >
          Contact
        </NavLink>
      </div>

      <div className="profile   relative group     flex items-center  gap-x-2 ">
        <img
          className="rounded-full  border"
          width={50}
          src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
          alt="User image"
        />
        <div className="hidden   w-28  absolute top-11   -right-10 bg-gray-100  shadow-2xl z-50 p-4   group-hover:flex flex-col  ">
          <NavLink
            className="hover:underline text-md hover:font-bold"
            to="/profile"
          >
            Profile
          </NavLink>
          <NavLink
            className="hover:underline text-md hover:font-bold"
            to="/profile"
          >
            Login
          </NavLink>
          <NavLink
            className="hover:underline text-md hover:font-bold"
            to="/profile"
          >
            Register{" "}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
