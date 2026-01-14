import React from 'react'

import circle from "../../../assets/images/circle.png"
import momo_pic from "../../../assets/images/momo-pic.png"
import oneBg from "../../../assets/images/oneBg.png"

import { BsArrowRightShort } from "react-icons/bs";

function Hero() {
    return (
        <section className="flex  justify-end min-h-125   bg-white ">
      <div className="   mt-20 p-4  mr-96 ">
        <div className=" space-y-3 ">
          <h4>RESTAURANT</h4>
          <h1 className="text-[61px]  font-bold   ">
            The{" "}
            <span
            className="bg-no-repeat w-48 text-white text-center  bg-center inline-block  "
              style={{
                backgroundImage:` url(${oneBg})`,
              }}
            >
              #One
            </span>
          </h1>
          <h1 className="text-[61px]  font-bold   ">
            Momo <span className="text-[#D95103]">Restaurant</span>{" "}
          </h1>
          <p className="text-[20px]  font-semibold  ">
            {" "}
            More than <span className="text-[#D95103]"> 20+ Varieties</span> of
            momo available for you{" "}
          </p>
          <button className="bg-[#0C6967]  flex   justify-center items-center  p-5 mt-4 text-white rounded-[100px] ">
            Explore Food Menu
            <BsArrowRightShort size={20} />
          </button>
        </div>
      </div>
      <div className=" h-150  overflow-hidden w-[30%] flex justify-end relative">
        <img
          className="absolute z-10 top-[26%]  w-96 right-16   "
          src={momo_pic}
          alt=""
        />
        <img className="absolute  h-full -top-8   " src={circle} alt="" />
      </div>
    </section>
  );
}

export default Hero
