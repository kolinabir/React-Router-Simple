import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='Header'>
           <ActiveLink to='/'>Home</ActiveLink>
           <ActiveLink to='/about'>about</ActiveLink>
           <ActiveLink to='/contact'>contact</ActiveLink>
           <ActiveLink to='/friends'>Friend</ActiveLink>
           <ActiveLink to='/post'>Posts</ActiveLink>
        </div>
    );
};

export default Header;