import React from 'react'


function Footer() {
  return (
    <>
    <div className='footer-one'> 
    <div className='footer'>
       
        <div className='footer-sub'>
           <h5>Address</h5>
           <p>Sector 110,Noida</p>

        </div>
        <div className='footer-sub'>
        <h5>Contact No.</h5>
        <p>4587587989</p>
        </div>
        <div className='footer-sub'>
        <h5>Email</h5>
        <p>digitech@gmail.com</p>
        </div>
        <div className='footer-sub'>
        <h5>Social Handles</h5>
        <div class="icons-social">
                <img src="./Assets/img/instagram.svg" alt='img'/>&nbsp;
                <img src="./Assets/img/facebook.svg" alt='img'/>&nbsp;
                <img src="./Assets/img/youtube.svg" alt='img'/>&nbsp;
                <img src="./Assets/img/twitter.svg" alt='img'/>&nbsp;
            </div>

</div>


    </div>
   <br/>
    <div className='hrLine'></div>
    </div>
    </>
  )
}

export default Footer