import React from 'react'
import logoImg from '../assets/logo.png' // ASSETS
import { Link } from 'react-router-dom' // ROUTER

const Header = () => {
    return(
        <nav className='navigation'>
           <div className='nav-left'>
               <Link to='/'>
                    <img src={logoImg} alt='company logo in green and white' />     
               </Link>
            </div> 
           <ul className='nav-right'>
                <li>
                    <Link to='/register'>
                        Register
                    </Link>
                </li>    
            </ul> 
        </nav>
    )
}

export default Header;