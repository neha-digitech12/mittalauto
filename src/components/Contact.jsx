
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Form from './Form'


function Contact() {
  return (
    <>
      <Navbar/>
  <div className="background-pic">
        <h2>Contact Us</h2>
    </div>
    <div class="main-body12">
        <div class="first">
          <div className="first-1">
          <h5>Get in touch</h5>
          <h1>Send Message Us</h1>
          </div>
            <div className="first-1">
            <h5>Our Location</h5>
            <p>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. </p>
            </div>
            <div className="first-1">
            <h5>Phone Number</h5>
            <p>+919090909090</p>
            </div>
            <div className="first-1"> 
            <h5>Email Address</h5>
            <p>xyz@gmail.com</p>
            </div>
  
            <h5 >Social handles</h5>
            <div class="icons-social">
                <img src="./Assets/img/instagram.svg" alt='img'/>
                <img src="./Assets/img/facebook.svg" alt='img'/>
                <img src="./Assets/img/youtube.svg" alt='img'/>
                <img src="./Assets/img/twitter.svg" alt='img'/>
            </div>
        </div>
        <div class="second"></div>
<Form/>
        {/* <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="3f0c0fd4-1cb8-4706-8769-406d0105dd6b"/>
            <div className="form-group">
            <input type="text" id="name" className="form-input" name="name" required/>
            <label for="name" className="form-label">Name*</label>
            </div>
            <div className="form-group">
            <input type="email" id="name" className="form-input" name="email" required/>
            <label for="email" className="form-label">Email*</label>
            </div>
            <div className="form-group">
            <input type="phone" id="name" className="form-input" name="phone" required/>
            <label for="name" className="form-label">Phone*</label>
            </div>
            <div className="form-group">
            <textarea name="message"  className="form-input" cols="55" rows="4" 
             required></textarea>
            <label for="message" className="form-label">Message</label>
            </div>
           
            <button type="submit" className='btn'>Send Message</button>
        </form> */}
    </div>
    <div className="map">
      <iframe
        className="mapp"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2354326878512!2d77.38488819999999!3d28.532642400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9efd225aa8b%3A0x4fb952a81cc2e65c!2sDigiTechMatrix!5e0!3m2!1sen!2sin!4v1738669010016!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        height="300px"
        width="100%"
      ></iframe>
    </div>
    <Footer/>
    </>

    
  )
}

export default Contact
