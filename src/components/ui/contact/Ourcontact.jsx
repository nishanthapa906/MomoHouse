
import { FaClock, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneVolume, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import logo from  "../../../assets/images/momo.png"

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            service: e.target.service.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
        };

        console.log("Contact Form Data:", data);
    };

    return (
        <section className="w-full bg-white">


            <div className='p-4 mt-[64px] flex justify-center  text-[#0C6967]  w[400px] leading-[1.2] align-middle'>
                <h2 className='font-[Allura] text-6xl' > Our Contact</h2>
            </div>
            <div >
                <h2 className='text-[#6B788E] flex justify-center mt-[16px]'>GET IN TOUCH </h2>
                <p className='mt-2 text-3xl flex justify-center font-bold'> <span className='text-[#D95103]'> Our Friendly Team </span> would love to hear from you</p>
            </div>

            <div className='flex  mt-4  ml-40'>
                <div className='   w-90 ml-40  gap-[40px]   mt-2    rounded-[16px]   z-10 shadow-md  ' >
                    <h1 className=' flex p-[40px]  gap-0.5'> <span className='  p-1 text-orange-600'>{<FaLocationDot />}</span><span className=' text-[#101828]  font-semibold  font-[Inter]' >Location</span></h1>
                    <p className='p-2 text-center -mt-2 font-[Inter] italic font-semibold'> New Baneshwor -41201, Kathmandu, Bagmati, Nepal</p>
                </div>

                <div className='  ml-40  gap-[40px] opacity-100  mt-2   h-[233px] w-90  rounded-[16px]  relative z-10 shadow-md  ' >
                    <h1 className=' flex p-[40px]  gap-0.5'> <span className='  p-1 text-orange-600'>{<FaPhoneVolume />}</span><span className=' ml-2 text-[#101828]  font-semibold  font-[Inter]' >Mobile</span></h1>
                    <h2 className='text-[#0C6967] font-bold p-2 ml-10' >Mobile: <span className='ml-10 relative text-black '>  (+977) 980 5689789 <br /> <span className='ml-25'> (+977) 9841 275897</span> </span> </h2>
                    <h2 className='text-[#0C6967] font-bold p-2 ml-10' >Tel: <span className='ml-19 relative text-black '> 01-4783972 </span> </h2>
                </div>


                <div className='  ml-40  gap-[40px] opacity-100  mt-2   h-[233px] w-90  rounded-[16px]  relative z-10 shadow-md  ' >
                    <h1 className=' flex p-[40px]  gap-0.5'> <span className='  p-1 text-orange-600'>{<FaClock />}</span><span className='ml-2 text-[#101828]  font-semibold  font-[Inter]' >Service Time</span></h1>
                    <h2 className='text-[#0C6967] font-bold p-2 ml-10' >MON-FRI: <span className='ml-10 relative text-black '> 8 am - 8pm  </span> </h2>
                    <h2 className='text-[#0C6967] font-bold p-2 ml-10' >SAT-SUN: <span className='ml-10 relative text-black '>  Closed  </span> </h2>

                </div>

            </div>



            <div className="flex  gap-10  ml-55 mt-8 w-[1439px]">

              
                <div className=" h-[800px] ">
                    <iframe
                        title="map"
                        className="w-[711px] h-full "
                        src="https://www.google.com/maps?q=New%20Baneshwor%20Kathmandu&output=embed"
                       
                    ></iframe>
                </div>

                {/* Form */}
                <div className="bg-white w-[828px]  h-[700px] rounded-xl p-8   shadow">
                    <h3 className="text-3xl font-semibold mb-1">
                        Contact <span className="text-orange-500">Us</span>
                    </h3>

                    <p className="mt-8 text-sm text-gray-500 mb-6">
                        If you have any queries, send us a message. Our friendly team would love to hear from you
                    </p> 

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="firstName"
                                placeholder="First Name"
                                className="w-full px-4 py-3 text-sm rounded-md bg-gray-50 outline-none focus:ring-2 focus:ring-teal-600"

                            />
                            <input
                                name="lastName"
                                placeholder="Last Name"
                                className="w-full px-4 py-3 text-sm rounded-md bg-gray-50 outline-none focus:ring-2 focus:ring-teal-600"
                            />
                        </div>

                        <select name="service" className=" mt-3 input">
                            <option>What can we do for you</option>
                            <option>Support</option>
                            <option>Sales</option>
                        </select>

                        <input
                            name="email"
                            placeholder="Email"
                            className=" mt-3 w-full px-4 py-3 text-sm rounded-md bg-gray-50 outline-none focus:ring-2 focus:ring-teal-600"
                        />

                        <input
                            name="phone"
                            placeholder="Phone Number  +977"
                            className=" mt-3 w-full px-4 py-3 text-sm rounded-md bg-gray-50 outline-none focus:ring-2 focus:ring-teal-600"
                        />

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Message"
                            className=" mt-3 w-full px-4 py-3 text-sm rounded-md bg-gray-50 outline-none focus:ring-2 focus:ring-teal-600 resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className=" mt-3 w-full bg-teal-700 text-white py-3 rounded-full hover:bg-teal-800 transition"
                        >
                            Send Message
                        </button>

                    </form>
                </div>
            </div>

            <footer className="bg-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
        {/* Logo and Description */}
        <div className="md:w-1/3">
          <div className="flex items-center mb-4">
            <img src={logo} alt="momos logo" className="w-8 h-8 mr-2" />
            <span className="text-[#0C6967]  font-semibold text-2xl">momos</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas molestie. 
            Volutpat quis egestas porttitor turpis sit in. Lorem nunc nullam morbi urna amet 
            suspendisse nullam ac vivamus.
          </p>
        </div>

       
        <div className="flex justify-between md:w-2/3">
         
          <div>
            <h3 className="text-[#0C6967] font-semibold mb-2 text-2xl">momos</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>About Us</li>
              <li>Our Menu</li>
              <li>Our Services</li>
              <li>Contact Us</li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-[#0C6967] font-semibold mb-2 text-2xl" >Legals</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[#0C6967] font-semibold mb-2 text-2xl">Follow Us</h3>
            <div className="flex space-x-3">
              <FaFacebookF className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaLinkedinIn className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaTwitter className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaYoutube className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaInstagram className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaTiktok className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-10"></div>
    </footer>

        </section>
    );
}
