import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
           <Link to='/'>Home</Link>
           <Link to='/about'>about</Link>
           <Link to='/contact'>contact</Link>
           <Link to='/friends'>Friend</Link>
           <Link to='/post'>Posts</Link>
        </div>
    );
};

export default Header;