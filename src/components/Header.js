import React from 'react'
import logoImg from '../assets/logo.png'

const Header = () => {
    return(
        <div className='header'>
            <div className='wrap'>
                <div className='logo'>
                    <img src={logoImg} alt='Company logo in green with white background'/>
                </div>
            </div>
        </div>
    )
}

export default Header;