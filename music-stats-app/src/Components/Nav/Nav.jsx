import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <>
            <nav>
                <Link to="#artists">Artistas</Link>
                <Link to="#albuns">Álbuns</Link>
                <Link to="#musics">Músicas</Link>
            </nav>
        </>
    );
};

export default Nav;