import React from 'react'
import chef from "../../../assets/images/about_chef.png"
import vidimg from "../../../assets/images/about_vid.png"
import momo from "../../../assets/images/about_momo.png"
import friedmomo from "../../../assets/images/about_fried_momo.png"
import showmomo from "../../../assets/images/about_show_momo.png"
import ceo from "../../../assets/images/about_ceo.png"
import logo from "../../../assets/images/momo.png"
import multiplechef from "../../../assets/images/about_mutiple_chef.png"
import slider from "../../../assets/images/about_slider.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'





function Aboutus() {
    return (
        <section>
           <div className='bg-white flex  p-12  '>
            <div className=''><h1 className='bg-white  text-[#0C6967] p-12 text-5xl  ml-40   font-[Allura]'> About us</h1>
            <h2 className='text-[#6B788E] p-12 text-xl -mt-10 ml-40 '>WE PRIDE OURSELF ON</h2>
            <h3 className='font-bold p-12 text-3xl -mt-20 ml-40 '> <span className='text-[#D95103]'>Our authentic momo recipes<br/></span> passed down through<br/> generations </h3>
            </div>
             <img className='w-[500px] h-[550px]   ml-[250px] ' src={chef} alt="" />
           </div>

           <div>
            <img className=' p-28 bg-white -mt-30 ' src={vidimg} alt="" />
           </div>

          <div className='flex bg-white -ml-15'>
           <div className='bg-white flex flex-wrap  p-12  '>
            <h1 className='font-bold p-12 text-3xl -mt-20 ml-40'> Our momos are <span className='text-[#D95103]'> made  <br/>with love</span>  </h1>
            <p className='-ml-89 mt-15'>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Eaque laudantium vel in nam accusantium fugiat <br/> a commodi quae ipsam, quod sint quos non, <br/>dolores placeat accusamus, veniam porro id soluta!</p>
            </div>
             <img className='w-[600px] h-[500px]   ml-[250px] ' src={momo} alt="" />
           </div>
           

           <div className='flex bg-white  '>
            <img className='w-[600px] h-[500px] mt-8  ml-[170px] ' src={friedmomo} alt="" />
            <div>
            <h1 className='font-bold p-12 text-3xl -mt-2 ml-25'>Taste the difference with <br/> <span className='text-[#D95103]'>our handcrafted momos</span></h1>
            <p className='ml-38  -mt-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Debitis autem facere animi quo est assumenda ipsa suscipit <br/>quisquam cupiditate voluptas iusto <br/>quos dolor iste tenetur repellendus quasi vel, velit veritatis!</p>
             </div>
           </div>

           <div className='flex bg-white -ml-15 '>
            <div className='bg-white flex flex-wrap  p-12'>
              <h1  className='font-bold p-12 text-3xl -mt-10 ml-40'>Our momos are the <br/> perfect<span className='text-[#D95103]'>  blend of tradition <br/>and innovation</span></h1>
             <p  className='ml-51 -mt-38'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Voluptates maiores id aperiam in aliquid voluptate doloremque? <br/>Odit nam tempora ratione, facilis totam fugit <br/>minima repudiandae, fugiat, esse cum quae quam!</p>
             </div>
             <img className='w-[600px] h-[500px] mr-96   ' src={showmomo} alt="" />
           </div>


           <div>
            <img className=' p-28 bg-white -mt-20 ' src={ceo} alt="" />
           </div>

           <div className='bg-white '> 
            <div className='text-center bg-white text-4xl   '>
            <h1 className='font-bold'>Meet The <span className='text-[#D95103]'>Team</span></h1>
            <h3 className='mt-3 text-[#0C6967] text-2xl'>Our talented team members who delivers only the best results</h3>
            </div>
            
           <img className='mt-11 ml-100  w-[1128px]  h-[512px]' src={multiplechef} alt="" />

           <img className = ' mt-5 ml-100 w-[1128px] h-[48px]'src={slider} alt="" />
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

export default Aboutus
