

// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";

// const CookieConsent = () => {
//   const [isBannerVisible, setIsBannerVisible] = useState(true);

//   // Handle user accepting cookies
//   const handleAccept = () => {
//     Cookies.set("cookie-consent", "accepted", { expires: 365 }); // Cookie will expire in 1 year
//     setIsBannerVisible(false); // Hide the banner after acceptance
//   };

//   // Handle user rejecting cookies
//   const handleReject = () => {
//     Cookies.set("cookie-consent", "rejected", { expires: 365 }); // Cookie will expire in 1 year
//     setIsBannerVisible(false); // Hide the banner after rejection
//   };

//   // Always show the banner on page load
//   useEffect(() => {
//     // Check if the user has previously accepted or rejected cookies
//     const cookieConsent = Cookies.get("cookie-consent");
//     if (cookieConsent === "accepted" || cookieConsent === "rejected") {
//       setIsBannerVisible(false); // Hide banner if consent is already given or rejected
//     }
//   }, []);

//   // Don't show the banner if consent is already given or rejected
//   if (!isBannerVisible) return null;

//   return (
//     <div style={styles.banner}>
//       <p>
//         We use cookies to enhance your experience. By continuing to visit this
//         site, you agree to our use of cookies.
//       </p>
//       <div style={styles.buttons}>
//         <button style={styles.acceptButton} onClick={handleAccept}>
//           Accept
//         </button>
//         <button style={styles.rejectButton} onClick={handleReject}>
//           Reject
//         </button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   banner: {
//     position: "fixed",
//     bottom: 0,
//     left: 0,
//     width: "100%",
//     backgroundColor: "#DFAF46",
//     color: "#fff",
//     padding: "10px 20px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     zIndex: 1000,
//   },
//   buttons: {
//     display: "flex",
//     gap: "10px",
//   },
//   acceptButton: {
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     cursor: "pointer",
//   },
//   rejectButton: {
//     backgroundColor: "#f44336",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     cursor: "pointer",
//   },
// };

// export default CookieConsent;




// import CookieConsent from "react-cookie-consent";


// import React from 'react'

// function Cookies() {
//   return (
//    <>
//    <CookieConsent debug={true}
//    location="bottom"
//    style={{background:"#DFAF46"}}
//    buttonStyle={{color:"#000"}}

//    >
//     Thiis sites uses Cookies.See our<a href="/privacy">Privacy Policy</a>  for more
//    </CookieConsent>
   
//    </>
//   )
// }

// export default Cookies



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CookieConsent = () => {
//   const [isConsentGiven, setIsConsentGiven] = useState(false);
//   const [userIp, setUserIp] = useState(null);

//   useEffect(() => {
//     // Check if cookies are already accepted
//     const consentStatus = localStorage.getItem('cookieConsent');
//     if (consentStatus === 'accepted') {
//       setIsConsentGiven(true);
//       const storedIp = localStorage.getItem('userIp');
//       setUserIp(storedIp); // Set stored IP if exists
//     }
//   }, []);

//   const acceptCookies = () => {
//     // Fetch user IP address using an external service
//     axios.get('https://api.ipify.org?format=json')
//       .then(response => {
//         const ip = response.data.ip;
//         setUserIp(ip);
//         // Save the consent status and IP in localStorage
//         localStorage.setItem('cookieConsent', 'accepted');
//         localStorage.setItem('userIp', ip);
//         setIsConsentGiven(true);
//       })
//       .catch(err => console.error('Error fetching IP:', err));
//   };

//   const rejectCookies = () => {
//     // Store rejection in localStorage
//     localStorage.setItem('cookieConsent', 'rejected');
//     setIsConsentGiven(false);
//   };

//   return (
//     <div className={`cookie-consent ${isConsentGiven ? 'hidden' : ''}`}>
//       <div className="cookie-banner">
//         <p>By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.</p>
//         <button onClick={acceptCookies}>Accept All Cookies</button>
//         <button onClick={rejectCookies}>Reject All</button>
//       </div>
//       {isConsentGiven && userIp && (
//         <div className="ip-info">
//           <p>Your IP address is: {userIp}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CookieConsent;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CookieConsent = () => {
//   const [isConsentGiven, setIsConsentGiven] = useState(false);
//   const [userIp, setUserIp] = useState(null);
//   const [isLoading, setIsLoading] = useState(false); // For loading state

//   useEffect(() => {
//     // Check if cookies are already accepted
//     const consentStatus = localStorage.getItem('cookieConsent');
//     if (consentStatus === 'accepted') {
//       setIsConsentGiven(true);
//       const storedIp = localStorage.getItem('userIp');
//       setUserIp(storedIp); // Set stored IP if exists
//     }
//   }, []);

//   const acceptCookies = () => {
//     setIsLoading(true); // Start loading while fetching the IP
//     // Fetch user IP address using an external service
//     axios.get('http://api.ipify.org/?format=json')
//       .then(response => {
//         const ip = response.data.ip;
//         setUserIp(ip); // Set the user's IP
//         // Save the consent status and IP in localStorage
//         localStorage.setItem('cookieConsent', 'accepted');
//         localStorage.setItem('userIp', ip);
//         setIsConsentGiven(true);
//         setIsLoading(false); // Stop loading after fetching IP
//       })
//       .catch(err => {
//         console.error('Error fetching IP:', err);
//         setIsLoading(false); // Stop loading on error
//       });
//       console.log(acceptCookies)
//   };

//   const rejectCookies = () => {
//     // Store rejection in localStorage
//     localStorage.setItem('cookieConsent', 'rejected');
//     setIsConsentGiven(false);
//   };

//   return (
//     <div className={`cookie-consent ${isConsentGiven ? 'hidden' : ''}`}>
//       <div className="cookie-banner">
//         <p>We use cookies to enhance your experience. By accepting, you agree to our use of cookies.</p>
//         <button onClick={acceptCookies} disabled={isLoading}>
//           {isLoading ? 'Accepting...' : 'Accept Cookies'}
//         </button>
//         <button onClick={rejectCookies}>Reject Cookies</button>
//       </div>
      
//       {isConsentGiven && userIp && (
//         <div className="ip-info">
//           <p>Your IP address is: {userIp}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CookieConsent;



// import CookieConsent from "react-cookie-consent";


// import React from 'react'

// function Cookies() {
//   return (
//     <CookieConsent
//     location="bottom"
//     buttonText="Sure man!!"
//     cookieName="myAwesomeCookieName2"
//     style={{ background: "#2B373B" }}
//     buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
//     expires={150}
//   >
//     This website uses cookies to enhance the user experience.{" "}
//     <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
//   </CookieConsent>
//   )
// }

// export default Cookies



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CookieConsent = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [userIp, setUserIp] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

 
  useEffect(() => {
    const consentStatus = localStorage.getItem('cookieConsent');
    if (consentStatus === 'accepted') {
      setIsConsentGiven(true);
      const storedIp = localStorage.getItem('userIp');
      const storedLocation = localStorage.getItem('userLocation');
      setUserIp(storedIp);
      setUserLocation(storedLocation);
    }
  }, []);

  
  const acceptCookies = () => {
    setIsLoading(true); 

    // Fetch user IP and location
    axios.get('https://ipinfo.io?token=d3108dbab5f67') 
      .then(response => {
        const { ip, city, country } = response.data;
        setUserIp(ip);
        setUserLocation(`${city}, ${country}`);



  localStorage.setItem('cookieConsent', 'accepted');
  localStorage.setItem('userIp', ip);
  localStorage.setItem('userLocation', `${city}, ${country}`);
  
  setIsConsentGiven(true);
  setIsLoading(false); 


      })
      .catch(err => {
        console.error('Error fetching IP and location:', err);
        setIsLoading(false); 
      });
  };


  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsConsentGiven(false);
  };

  return (
    <div className={`cookie-consent ${isConsentGiven ? 'hidden' : ''}`}>
      <div className="cookie-banner">
        <p>By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.</p>
        <button onClick={acceptCookies} disabled={isLoading}>
          {isLoading ? 'Accepting...' : 'Accept Cookies'}
        </button>
        <button onClick={rejectCookies}>Reject Cookies</button>
      </div>
      
      {isConsentGiven && userIp && userLocation && (
        <div className="ip-info">
          <p>Your IP address is: {userIp}</p>
          <p>Your location is: {userLocation}</p>
         
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
