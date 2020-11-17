import React from 'react';

import footerStyles from './styling/footer.module.scss';
import logoWhite from './images/logoWhite.svg';

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.inner_footer}>
                <img src={logoWhite} alt="white logo"/>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/saxon-du-plooy-058523171/" target='_blank' rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/SaxonJude" target='_blank' rel="noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://codepen.io/SaxonJude" target='_blank' rel="noreferrer">Codepen</a>
                        <a href="https://dribbble.com/SaxonJude" target='_blank' rel="noreferrer">Dribbble</a>
                    </li>
                </ul>
                <p>@ 2020 Saxon Du Plooy - Thank you for your time.</p>
            </div>
        </div>
    );
}

export default Footer;