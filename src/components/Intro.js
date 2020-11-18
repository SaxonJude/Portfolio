import React from 'react';

import introStyles from './styling/intro.module.scss';

const Intro = () => {
    return (
        <div className={introStyles.introContainer}>
            <div className={introStyles.textWrapper}>
                <div className={`${introStyles.text1} ${introStyles.text}`}>DEFINITION & PURPOSE</div> 
                <div className={`${introStyles.text2} ${introStyles.text}`}>DEFINITION & PURPOSE</div>
                <div className={`${introStyles.text3} ${introStyles.text}`}>DEFINITION & PURPOSE</div>
                <div className={`${introStyles.text4} ${introStyles.text}`}>DEFINITION & PURPOSE</div>
                <div className={`${introStyles.text5} ${introStyles.text}`}>DEFINITION & PURPOSE</div>
                <div className={`${introStyles.text6} ${introStyles.text}`}>DEFINITION & PURPOSE</div>
                <div className={`${introStyles.text7} ${introStyles.text}`}>DEFINITION & PURPOSE</div>
                <div className={`${introStyles.text8} ${introStyles.text}`}>DEFINITION & PURPOSE</div>
                <div className={`${introStyles.text9} ${introStyles.text}`}>DEFINITION & PURPOSE</div>
                <div className={`${introStyles.text10} ${introStyles.text}`}>DEFINITION & PURPOSE</div>
                <div className={`${introStyles.text11} ${introStyles.text}`}>DEFINITION & PURPOSE</div>
            </div>
        </div>
    );
}

export default Intro;