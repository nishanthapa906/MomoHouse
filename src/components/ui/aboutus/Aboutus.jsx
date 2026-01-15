import React from 'react'
import chef from "../../../assets/images/about_chef.png"
import vidimg from "../../../assets/images/about_vid.png"
import momo from "../../../assets/images/about_momo.png"
import friedmomo from "../../../assets/images/about_fried_momo.png"
import showmomo from "../../../assets/images/about_show_momo.png"
import ceo from "../../../assets/images/about_ceo.png"

import multiplechef from "../../../assets/images/about_mutiple_chef.png"
import slider from "../../../assets/images/about_slider.png"





function Aboutus() {
    return (
        <section>
           <div className=''>
            <h1> About us</h1>
            <h2>WE PRIDE OURSELF ON</h2>
            <h3>Our authentic momo recipes passed down through generations</h3>
             <img src={chef} alt="" />
           </div>

           <div>
            <img src={vidimg} alt="" />
           </div>

           <div>
            <h1> Our momos are made with love</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laudantium vel in nam accusantium fugiat a commodi quae ipsam, quod sint quos non, dolores placeat accusamus, veniam porro id soluta!</p>
             <img src={momo} alt="" />
           </div>
           

           <div>
            <img src={friedmomo} alt="" />
            <h1>Taste the difference with our handcrafted momos</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis autem facere animi quo est assumenda ipsa suscipit quisquam cupiditate voluptas iusto quos dolor iste tenetur repellendus quasi vel, velit veritatis!</p>

           </div>

           <div>
            <h1>Our momos are the perfect blend of tradition and innovation</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores id aperiam in aliquid voluptate doloremque? Odit nam tempora ratione, facilis totam fugit minima repudiandae, fugiat, esse cum quae quam!</p>
             <img src={showmomo} alt="" />
           </div>
           <div>
            <img src={ceo} alt="" />
           </div>

           <div>
            <h1>Meet The Team</h1>
            <h3>Our talented team members who delivers only the best results</h3>
           <img src={multiplechef} alt="" />

           <img src={slider} alt="" />
           </div>
           
        </section>
    )
}

export default Aboutus
