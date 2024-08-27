import React, { useState } from 'react'
import "./Navbar.css"
import Menu from '../../assets/utils/menu/Menu';
import LoginModel from '../../assets/utils/model/LoginModel';
const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='navbar-container'>
        <div className="navbar-left">
            <div className="logo-item">
                <div className="logo"></div>
            </div>
            <span className="title-item">Sathish</span>
        </div>

        <div className="navbar-right">
            <ul className="links">
                
                <li className='input'><input type="search" className='search-item'  id="input-item" placeholder='Search....'></input>
                </li>

                
                
                <li className='login'><span className='logo-item'onClick={()=> setIsOpen(true)}>Login</span></li>
                {isOpen?<LoginModel onClose={() => setIsOpen(false)} />:null}
                

            </ul>
            {/* <div className='menu' onClick={()=>{document.querySelector(".navbar-right").classList.toggle("responsive");}}><Menu/></div> */}
        </div>
    </header>
  )
}

export default Navbar
