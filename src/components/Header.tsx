import React from "react";
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px'}}>
            <Link to='/' style={{ fontFamily: 'Hepta Slab', textDecoration: 'none', color: '#F49961', fontWeight: 'bold'}}>PORTFOLIO</Link>
            <nav style={{ display: 'flex', gap: '30px'}}>
                <Link to='/about' style={{ fontFamily: 'Hepta Slab', textDecoration: 'none', color: '#F49961', fontWeight: 'bold'}}>ABOUT</Link>
                <Link to='/works' style={{ fontFamily: 'Hepta Slab', textDecoration: 'none', color: '#F49961', fontWeight: 'bold' }}>WORKS</Link>
                <Link to='/contact' style={{ fontFamily: 'Hepta Slab', textDecoration: 'none', color: '#F49961', fontWeight: 'bold' }}>CONTACT</Link>
            </nav>
        </header>
    )
}