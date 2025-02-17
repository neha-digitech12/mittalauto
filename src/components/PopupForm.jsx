
// import React, { useState,useEffect, useRef } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';


// function Popup() {
//   const navigate = useNavigate();
//   const [showPopup, setShowPopup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact:'',
//     message:''
//   });

//   const popupRef = useRef(null); 

  
//   useEffect(() => {
//     setShowPopup(true);

   
//     const handleClickOutside = (e) => {
//       if (popupRef.current && !popupRef.current.contains(e.target)) {
//         setShowPopup(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Name: ${formData.name}\nEmail: ${formData.email}\ncontact: ${formData.contact}\nmessage: ${formData.message}`);
//     setShowPopup(false); 
//   };

 
//   const closePopup = () => {
//     setShowPopup(false);
//     navigate('/');

//   };

//   return (
//     <div className="App">
        
//       {showPopup && (
//         <div className="popup-overlay">
           
//             <div className='popup-img'>
//                 <img src='./Assets/img/autoimg.png' alt='img'/>
//             </div>

//           <div className="popup-form" ref={popupRef}>

           
          
//             <h6>Send Us a Message</h6>
//             <form action="https://api.web3forms.com/submit" method="POST">

            
             
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder='Name*'
//                 />
            
             
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder='Email Address*'
//                 />
//                 <input
//                   type="number"
//                   name="contact"
//                   value={formData.contact}
//                   onChange={handleChange}
//                   required
//                   placeholder='Contact*'
//                 />
//                   <textarea  type="text" name="message" placeholder="Message" cols="50" rows="2" 
//                    value={formData.message}
//                    onChange={handleChange}
//                   ></textarea>
             
//               <div className="buttons">
//                 <button type="submit">Send Message</button>
               
//               </div>
//             </form>
         
//             <div className='cross' onClick={closePopup}>X</div>
           
           
//           </div>
        
//         </div>
//       )}
//     </div>
//   );
// }

// export default Popup;




import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Popup() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });
  const [errors, setErrors] = useState({}); 

  const popupRef = useRef(null);

  useEffect(() => {
    setShowPopup(true);

    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const validateForm = () => {
    let validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is invalid';
    }
    if (!formData.contact) {
      validationErrors.contact = 'Contact number is required';
    } else if (!/^\d+$/.test(formData.contact)) {
      validationErrors.contact = 'Contact number must be numeric';
    }
    return validationErrors;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm(); 
    setErrors(formErrors); 
    
    if (Object.keys(formErrors).length === 0) {
      
      console.log(`Name: ${formData.name}\nEmail: ${formData.email}\nContact: ${formData.contact}\nMessage: ${formData.message}`);
      setShowPopup(false);
      window.scrollTo(0, 0); 
      navigate('/');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate('/');
  };

  return (
    <div className="App">
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-img">
            <img src="./Assets/img/autoimg.png" alt="img" />
          </div>

          <div className="popup-form" ref={popupRef}>
            <h6>Send Us a Message</h6>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name*"
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address*"
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <input
                type="number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                placeholder="Contact*"
              />
              {errors.contact && <span className="error">{errors.contact}</span>}

              <textarea
                name="message"
                placeholder="Message"
                cols="50"
                rows="2"
                value={formData.message}
                onChange={handleChange}
               
              ></textarea>
              {/* {errors.message && <span className="error">{errors.message}</span>} */}

              <div className="buttons">
                <button type="submit">Send Message</button>
              </div>
            </form>

            <div className="cross" onClick={closePopup}>
              X
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
