import React from 'react'
import chef from '../../../assets/images/chef.png'
import servideo from '../../../assets/images/servicevidimg2.jpg'
import qr from '../../../assets/images/qr.png'
import dinner from '../../../assets/images/ser_dinnerimg.png'
import logo from "../../../assets/images/momo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube, FaPlay } from 'react-icons/fa'

function Ourservices() {
    return (
        <section className="font-sans text-[#2D3748] bg-white">
            {/* --- Hero Section --- */}
            <div className='flex flex-col md:flex-row items-center justify-between px-10 md:px-32 py-16 bg-white'>
                <div className='max-w-xl ml-20'>
                    <h1 className='text-[#0C6967] text-5xl font-[Allura] italic mb-4'>Our Services</h1>
                    <h3 className='text-[#6B788E] text-lg font-bold tracking-widest mb-2'>KNOWING OUR CUSTOMERS NEEDS</h3>
                    <h2 className='text-3xl font-bold leading-tight'>
                        <span className='text-[#D95103]'>We're more than just momos.</span><br/>
                        We're a full-service dining experience.
                    </h2>
                </div>
                <div className='mt-10  md:mt-0 relative  '>
                  <div className='mr-59 '>
                    <div className=' bg-[#0C6967]   rounded-full  w-110 h-110 overflow-hidden flex items-center justify-center'>
                        <img className='w-full h-full object-cover  pt-10' src={chef} alt="Chef" />
                    </div>
                    </div>
                </div>
            </div>

            {/* --- Video Banner Section --- */}
            <div className='relative -mt-10  w-full h-[500px] overflow-hidden group bg-white'>
                <img src={servideo} className="w-full h-full object-cover" alt="Dine with us" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10 md:px-32 text-white">
                    <h2 className="text-5xl font-bold mb-4">Dine With Us</h2>
                    <p className="mb-6 text-lg">Enjoy our momos in the comfort of your own home with our delivery services.</p>
                    <button className="flex items-center gap-3 bg-[#0C6967] hover:bg-[#0a5250] w-fit px-6 py-3 rounded-full transition">
                        <FaPlay className="text-sm" /> Watch the Video
                    </button>
                </div>
            </div>

            {/* --- Services Grid --- */}
            <div className='max-w-6xl mx-auto py-20 px-6 space-y-24 bg-white'>
                
                {/* Private Party */}
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    <div className='flex-1'>
                        <div className="text-orange-500 text-4xl mb-4">🎉</div>
                        <h2 className='text-3xl font-bold mb-4'>Private Party</h2>
                        <p className='text-gray-500 mb-8 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. 
                            Leo odio tincidunt ipsum magna lacus viverra tincidunt.
                        </p>
                        <div className="flex items-center gap-4 bg-white shadow-lg p-4 rounded-xl w-fit">
                            <div>
                                <p className="font-bold text-[#0C6967]">Scan the QR code</p>
                                <p className="text-xs text-gray-400">You can also check about the service</p>
                            </div>
                            <img src={qr} alt="QR Code" className="w-16 h-16" />
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img src={dinner} className="rounded-2xl shadow-xl w-full" alt="Private Party" />
                    </div>
                </div>

                {/* Catering (Reversed Row) */}
                <div className='flex flex-col md:flex-row-reverse items-center gap-12'>
                    <div className='flex-1'>
                        <div className="text-orange-500 text-4xl mb-4">👨‍🍳</div>
                        <h2 className='text-3xl font-bold mb-4'>Catering</h2>
                        <p className='text-gray-500 mb-8 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. 
                            Leo odio tincidunt ipsum magna lacus viverra tincidunt.
                        </p>
                        <div className="flex items-center gap-4 bg-white shadow-lg p-4 rounded-xl w-fit">
                            <div>
                                <p className="font-bold text-[#0C6967]">Scan the QR code</p>
                                <p className="text-xs text-gray-400">You can also check about the service</p>
                            </div>
                            <img src={qr} alt="QR Code" className="w-16 h-16" />
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img src={dinner} className="rounded-2xl shadow-xl w-full" alt="Catering" />
                    </div>
                </div>
            </div>

            {/* --- CTA Section --- */}
            <div className='bg-[#F5F6F7] p-16  ml-50 mr-50  text-center shadow-6xl shadow-[#F5F6F7] '>
                <h2 className='text-3xl font-bold mb-2'>Got any Queries?</h2>
                <p className='text-gray-500 mb-8'>If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
                <button className='bg-[#0C6967] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#0a5250] transition'>
                    Get in Touch
                </button>
            </div>

            {/* --- Footer --- */}
            <footer className="bg-white py-16 px-10 md:px-32 ">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-6">
                            <img src={logo} alt="logo" className="w-8 mr-2" />
                            <span className="text-[#0C6967] font-bold text-2xl">momos</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas molestie. 
                            Volutpat quis egestas porttitor turpis sit in.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-[#0C6967] font-bold mb-6 text-xl">momos</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="hover:text-[#0C6967] cursor-pointer">About Us</li>
                            <li className="hover:text-[#0C6967] cursor-pointer">Our Menu</li>
                            <li className="hover:text-[#0C6967] cursor-pointer">Our Services</li>
                            <li className="hover:text-[#0C6967] cursor-pointer">Contact Us</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#0C6967] font-bold mb-6 text-xl">Legals</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="hover:text-[#0C6967] cursor-pointer">Terms & Conditions</li>
                            <li className="hover:text-[#0C6967] cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-[#0C6967] cursor-pointer">Support</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#0C6967] font-bold mb-6 text-xl">Follow Us</h3>
                        <div className="flex gap-4">
                            <FaFacebookF className="text-gray-400 hover:text-[#0C6967] text-xl cursor-pointer" />
                            <FaInstagram className="text-gray-400 hover:text-[#0C6967] text-xl cursor-pointer" />
                            <FaTwitter className="text-gray-400 hover:text-[#0C6967] text-xl cursor-pointer" />
                            <FaYoutube className="text-gray-400 hover:text-[#0C6967] text-xl cursor-pointer" />
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Ourservices