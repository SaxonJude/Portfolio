import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Project from './Project';

import './styling/styles.scss';
import landingStyles from './styling/landing.module.scss';

import logoPink from './images/logoPink.svg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';

const App = () => {
    return (
        <div>
            <Header />
                <div className={landingStyles.hero}>
                    <div className={landingStyles.inner_hero}>
                        <div className={landingStyles.inner_hero_container}>
                            <img src={logoPink} alt="Pink Logo"/>
                            <h1>Saxon Du Plooy</h1>
                            <h2>React Based Front-end Web Developer</h2>
                        </div>
                        <section>
                            <a href="#">Projects</a><span>/</span>
                            <a href="#">Skills</a><span>/</span>
                            <a href="#">Contact</a>
                        </section>
                    </div>
                </div>
                <div className={landingStyles.workList_container}>
                    <div className={landingStyles.workList_container_inner}>
                        <div className={landingStyles.workList_container_heading}>
                            <h4>Case Studies</h4>
                            <h3>Featured Work</h3>
                        </div>
                        <div className={landingStyles.workList_container_projects}>
                            <Project
                             img={img1}
                             title='StreamMe'
                             skill1='React'
                             skill2='Redux'
                             skill3='TMDB API'
                             skill4='MongoDB'
                             skill5='Node.Js'
                             skill6='Axios'
                             skill7='Git'
                             skill8='CSS/SCSS'
                             vc=' - Version Control'
                             />
                            <Project
                             img={img2}
                             title='AndyTud'
                             skill1='React'
                             skill2='Redux'
                             skill3='TMDB API'
                             skill4='MongoDB'
                             skill5='Node.Js'
                             skill6='Axios'
                             skill7='Git'
                             skill8='CSS/SCSS'
                             vc=' - Version Control'
                             />
                            <Project
                             img={img3}
                             title='Nexia'
                             skill1='React'
                             skill2='Redux'
                             skill3='TMDB API'
                             skill4='MongoDB'
                             skill5='Node.Js'
                             skill6='Axios'
                             skill7='Git'
                             skill8='CSS/SCSS'
                             vc=' - Version Control'
                             />
                            <Project
                             img={img4}
                             title='Portfolio'
                             skill1='React'
                             skill2='Redux'
                             skill3='TMDB API'
                             skill4='MongoDB'
                             skill5='Node.Js'
                             skill6='Axios'
                             skill7='Git'
                             skill8='CSS/SCSS'
                             vc=' - Version Control'
                             />
                            <Project
                             img={img5}
                             title='Forkify'
                             skill1='React'
                             skill2='Redux'
                             skill3='TMDB API'
                             skill4='MongoDB'
                             skill5='Node.Js'
                             skill6='Axios'
                             skill7='Git'
                             skill8='CSS/SCSS'
                             vc=' - Version Control'
                             />
                            <Project
                             img={img6}
                             title='ToDo List'
                             skill1='React'
                             skill2='Redux'
                             skill3='TMDB API'
                             skill4='MongoDB'
                             skill5='Node.Js'
                             skill6='Axios'
                             skill7='Git'
                             skill8='CSS/SCSS'
                             vc=' - Version Control'
                             />
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default App;