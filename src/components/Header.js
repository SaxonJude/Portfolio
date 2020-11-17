import React from 'react';
import headerStyles from './styling/header.module.scss';

import logoWhite from './images/logoWhite.svg';

const Header = () => {
    return (
        <nav className={headerStyles.header}>
            <div className={headerStyles.inner_header}>
                <img src={logoWhite} alt="white header logo"/>
                <ul className={headerStyles.header_anchors}>
                    <li><a href='#id'>Projects</a></li>
                    <li><a href='#id'>Skills</a></li>
                    <li><a href='#id'>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;