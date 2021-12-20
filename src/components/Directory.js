import React from 'react'
// // ASSETS
import shopMen from '../assets/shopMens.jpg'
import shopWomen from '../assets/shopWomens.jpg'

const Directory = () => {
    return(
        <div className='directory'>
            <div className='directory-women'>
                <img src={shopWomen} alt='women section banner' />
                <a href='/'>
                    Shop Women
                </a>
            </div>
            <div className='directory-men'>
                <img src={shopMen} alt='men section banner' />
                <a href='/'>
                    Shop Women
                </a>
            </div>
        </div>
    );
}

export default Directory;