import React from 'react';
import { useEffect } from 'react';
import { Routes,Route,useLocation} from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Contact from './components/Contact';
// import PopupForm from './components/PopupForm';
// import Cookies from './components/Cookies';

function App() {

  const location = useLocation();

  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location])

  

  return (
    <>
    {/* <PopupForm/> */}
   
  <Routes>
 
    <Route path='/' element={<Home/>}  />
    <Route path='/categories' element={<Categories/>} />
    <Route path='/contact' element={<Contact/>}/>
    {/* <Route path='/popup' element={<PopupForm/>}/> */}
  </Routes>

    </>
  )
}

export default App