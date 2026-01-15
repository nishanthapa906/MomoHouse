import React from 'react'
import chef from '../../../assets/images/chef.png'
import servideo from '../../../assets/images/servicevidimg.png'
import qr from '../../../assets/images/qr.png'
import dinner from '../../../assets/images/ser_dinnerimg.png'
import logo from  "../../../assets/images/momo.png"

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

function Ourservices() {
    return (
        <section >
            <div className='flex'>
         <div className=''>
            <h1>Our Services</h1>
            <h3> KNOWING OUR CUSTOMERS NEEDS</h3>
            <h3>We're more than just momos.
We're a full-service dining experience.</h3>


         </div>
         <div>
        <img src={chef} alt="" />
         </div>

         </div>


         <div>
            <img src={servideo} alt="" />
         </div>

         <div className=''>

            <h1>Private Party</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel nisi dolorum eius quia eveniet excepturi rem dicta, nulla numquam velit minima, corrupti, sint dignissimos impedit aliquid culpa commodi tempore!</p>
            <img src={qr} alt="" />

            <img src={dinner} alt="" />
         </div>

         
         <div className=''>
           <img src={dinner} alt="" />
            <h1>Categring</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel nisi dolorum eius quia eveniet excepturi rem dicta, nulla numquam velit minima, corrupti, sint dignissimos impedit aliquid culpa commodi tempore!</p>
            <img src={qr} alt="" />
         </div>

         <div>
            <h1>Got any Queries?</h1>
            <p> If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
            <button>Get in Touch</button>
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
    )
}

export default Ourservices
