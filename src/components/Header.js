import React from 'react'
import logoImg from '../assets/logo.png'

const Header = () => {
    return(
        <nav className='navigation'>
           <div className='nav-left'>
               <img src={logoImg} alt='company logo in green and white' />
            </div> 
           <ul className='nav-right'>
                <li><a href='/'>Products</a></li>    
                <li><a href='/'>About us</a></li>    
            </ul> 
        </nav>
    )
}

export default Header;