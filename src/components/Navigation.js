import React  from 'react';
import './Navigation.css';

const Navigation = props => (
    <nav className='navbar'>
        <ul className='nav'>
            <li className='nav-item'>
                <a href="#">Home</a>
            </li>
            <li className='nav-item'>
                <a href="#">Signup</a>
            </li>
             <li className='nav-item'>
                <a href="#">Login</a>
            </li>
        </ul>
    </nav>
);

export default Navigation;