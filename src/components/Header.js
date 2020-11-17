import React, { useState, useEffect } from 'react';
import headerStyles from './styling/header.module.scss';

import logoWhite from './images/logoWhite.svg';

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        if(typeof window !== 'undefined') {
            if(
                typeof window !== 'undefined' &&
                typeof window.addEventListener !== 'undefined'
            ) {
                window.addEventListener('scroll', scrolling);
            }
        }
    });

    const scrolling = () => {
        window.scrollY > 0 ? setScroll(true) : setScroll(false) ;
    };

    return (
        <nav className={headerStyles.header}>
            <div className={headerStyles.inner_header}>
                <img src={logoWhite} alt="white header logo"/>
                <ul className={headerStyles.header_anchors}>
                    <li><a href='#projects' rel="noopener noreferrer">Projects</a></li>
                    <li><a href='#skills'rel="noopener noreferrer">Skills</a></li>
                    <li><a href='#contact' rel="noopener noreferrer">Contact</a></li>
                </ul>
            </div>
            <a href="#"><i className={`fas fa-long-arrow-alt-up ${scroll ? headerStyles.active : ''}`}></i></a>
        </nav>
    );
}

export default Header;