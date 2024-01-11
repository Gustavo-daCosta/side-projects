import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';
import logo from '../../assets/images/logo.svg';

const Header = () => {
    const isStatsPage = window.location.pathname.includes('stats');
    
    return (
        <>
            <header>
                <img src={logo} alt="Logo" className="logo" />
                {isStatsPage ? 
                    <>
                        <Nav/>
                    </>
                : null }
            </header>
        </>
    );
};

export default Header;