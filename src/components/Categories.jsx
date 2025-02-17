import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Categoris() {
  return (
   <>
   <Navbar/>
    <div className="start">
       <div className="start-2">
       <a href="#cat" className="slide-up">Category</a>
       </div>
    </div>
   
    <div className="main-body1">
        <div className="card1">
            <img src="./Assets/img/newimg2.svg" alt='img'/> <div className="content">
                <div className="icons">
                    <i className="fa-solid fa-circle"></i>
                    <h5>All type of wheels</h5>
                </div>
              
                    <p> Wheels of e-riksha
                        Various type of wheels
                    </p>  
            </div>
            </div>
            
            <div className="card1">
                <img src="./Assets/img/newimg.svg" alt='img'/>  <div className="content">
                    <div className="icons">
                        <i className="fa-solid fa-circle"></i>
                    <h5>All type of wheels</h5>
                        </div>
                        
                        <p>Wheels of e-riksha
                            Various type of wheels
                        </p>  
                </div>
                </div>
                <div className="card1">
                    <img src="./Assets/img/newimg2.svg" alt='img'/> <div className="content">
                        <div className="icons">
                            <i className="fa-solid fa-circle"></i>
                    <h5>All type of wheels</h5>
                            </div>
                           
                            <p>Wheels of e-riksha
                                Various type of wheels
                            </p>
                        </div>
                    </div>
                    </div>
                    
                <Footer/>
 
   </>
  )
}

export default Categoris