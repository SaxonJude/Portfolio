import React, { useEffect, useRef } from 'react';
import { gsap, TimelineLite, TweenMax, Power3 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

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
import upperWave from './images/upperWave.svg';
import lowerWave from './images/lowerWave.svg';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    let mainLogo = useRef(null);
    let section = useRef(null);
    let hero = useRef(null);
    let projects = useRef(null);
    let projectList = useRef(null);
    let about = useRef(null);
    let skills = useRef(null);
    let tl = new TimelineLite({ delay: 1 });

    useEffect(() => {
        const heroImg = mainLogo.children[0];
        const heroSaxon = mainLogo.children[1].children[0];
        const heroDesc = mainLogo.children[2].children[0];
        const projectH5 = projects.firstElementChild.children[0];
        const projectH4 = projects.firstElementChild.children[1];

        const project1 = projectList.children[0];
        const project2 = projectList.children[1];
        const project3 = projectList.children[2];
        const project4 = projectList.children[3];
        const project5 = projectList.children[4];

        const aboutHeader = about.children[0];
        const aboutP1 = about.children[1];
        const aboutP2 = about.children[2];
        const aboutP3 = about.children[3];

        const skillsHeader = skills.children[0];
        const skill1 = skills.children[1].children[0];
        const skill2 = skills.children[1].children[1];
        const skill3 = skills.children[1].children[2];
        const skill4 = skills.children[1].children[3];

        const projectArray = [project1, project2, project3, project4, project5];
        const projectTitle = [projectH5, projectH4];
        const aboutArray = [aboutHeader, aboutP1, aboutP2, aboutP3];
        const skillsArray = [skillsHeader, skill1, skill2, skill3, skill4];

        TweenMax.to(hero, 0, { css: { visibility: 'visible' } });

        tl.staggerFrom([heroImg, heroSaxon, heroDesc], 1, {
            y: 90,
            opacity: 0,
            ease: Power3.easeOut,
            delay: .2
        }, .15)

        // HERO LOGO

        projectTitle.forEach((el, index) => {
            gsap.fromTo(el, {
                opacity: 0,
                y: 100,
            }, {
                y: 0,
                duration: .5,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: projectH4,
                    start: 'top 90%',
                    toggleActions: 'play none none pause',
                }
            });
        })

        // PROJECTS

        projectArray.forEach((el, index) => {
            gsap.fromTo(el, {
                opacity: 0,
                y: 80,
            }, {
                y: 0,
                duration: .3,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            });
        })

        // ABOUT SECTION

        aboutArray.forEach((el, index) => {
            gsap.fromTo(el, {
                opacity: 0,
                y: 100,
            }, {
                y: 0,
                duration: .4,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            });
        })

        // SKILLS

        skillsArray.forEach((el, index) => {
            gsap.fromTo(el, {
                opacity: 0,
                y: 100,
            }, {
                y: 0,
                duration: .4,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            });
        })

        tl.from(section, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1)

    });

    return (
        <div>
            <Header />
            <div ref={el => hero = el} className={landingStyles.hero}>
                <div className={landingStyles.inner_hero}>
                    <div ref={el => mainLogo = el} className={landingStyles.inner_hero_container}>
                        <img src={logoPink} alt="Pink Logo" />
                        <div className={landingStyles.inner_hero_line}>
                            <h1>Saxon Du Plooy</h1>
                        </div>
                        <div className={landingStyles.inner_hero_line}>
                            <h2>Front-end Web Developer</h2>
                        </div>
                    </div>
                    <section ref={el => section = el}>
                        <a href="#projects">Projects</a><span>|</span>
                        <a href="#about">About</a><span>|</span>
                        <a href="https://github.com/SaxonJude" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </section>
                </div>
            </div>
            <div id='projects' className={landingStyles.workList_container}>
                <div ref={el => projects = el} className={landingStyles.workList_container_inner}>
                    <div className={landingStyles.workList_container_heading}>
                        <h4>Case Studies</h4>
                        <h3>Featured Work</h3>
                    </div>
                    <div ref={el => projectList = el} className={landingStyles.workList_container_projects}>
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
                            url1='http://www.streamme.world/'
                            url2='https://github.com/SaxonJude/StreamMe'
                            url3='https://dribbble.com/shots/14329752-StreamMe-TMDB-desktop-ui-layout'
                            dribble='true'
                            descBlack1='StreamMe is a feature rich'
                            descPink1='React / Redux'
                            descBlack2=' application that’s connected to a backend using MongoDB Atlas. Browse all of your favorite movies and add them to a watchlist while having access to them through a'
                            descPink2='user profile'
                            descBlack3='made possible using JWT Token for'
                            descPink3='Authentication.'
                            descBlack4=' It fetches data from'
                            descPink4='TMDB API'
                            descBlack5='using Axios which uses pagination to sort through 20 films at a time.'
                        />
                        <Project
                            img={img2}
                            title='AndyTud'
                            skill1='React'
                            skill2='Gatsby'
                            skill3='Bootstrap'
                            skill4='GSAP'
                            skill5='JS ES6'
                            skill6='CSS/SCSS'
                            skill7='Git'
                            skill8='Node.Js'
                            url1='http://www.andrewtudders.com/'
                            url2='https://github.com/SaxonJude/andrew-tud'
                            url3='https://dribbble.com/shots/14590009-Personal-Trainer-Website'
                            dribble='true'
                            descBlack1='A'
                            descPink1='Freelanced'
                            descBlack2='website for a personal trainer called Andrew Tudders.  Provided UI/UX mockups using'
                            descPink2='wire framing'
                            descBlack3='on Figma to ensure final product will fulfill all expectations. Built with'
                            descPink3='React / Gatsby'
                            descBlack4='so the client would have no set up or hosting costs. This sit also features a daily'
                            descPink4='caloric needs calculator'
                            descBlack5='as requested from the client.'
                        />
                        <Project
                            img={img3}
                            title='Nexia'
                            skill1='React'
                            skill2='Gatsby'
                            skill3='Boostrap'
                            skill4='GraphQL'
                            skill5='HTML5'
                            skill6='CSS/SCSS'
                            skill7='Git'
                            skill8=''
                            url1='https://5fb2ce6f14e7150007964ba2--jovial-edison-56bea8.netlify.app/'
                            url2='https://github.com/SaxonJude/Nexia'
                            url3='https://dribbble.com/shots/14501070-Nexia-Ecom-Website'
                            dribble='true'
                            descBlack1='Nexia is an'
                            descPink1='React / Gatsby'
                            descBlack2='e-commerce brand selling high-end fashion, styled using'
                            descPink2='Bootstrap and SCSS'
                            descBlack3=', which implements a '
                            descPink3='contenful CMS '
                            descBlack4='and retrieves data using'
                            descPink4='GraphQL'
                            descBlack5=' seamlessly. This was done so more products could be added in the future creating a dynamic workspace. '
                        />
                        <Project
                            img={img4}
                            title='Portfolio'
                            skill1='React'
                            skill2='HTML5'
                            skill3='CSS/SCSS'
                            skill4='Git'
                            skill5='Node.Js'
                            dribble='true'
                            descBlack1='This portfolio was designed in Figma to display'
                            descPink1='some of my favorite projects.'
                            descBlack2='These 6 projects out of many display a variety of skill under my belt and are layed out in a way that makes it easy for you to see what they look like, what technologies are used, a link to visit the'
                            descPink2='live site'
                            descBlack3='+'
                            descPink3='source code'
                            descBlack4='and a'
                            descPink4='brief description '
                            descBlack5='of each.'
                        />
                        <Project
                            img={img5}
                            title='Forkify'
                            skill1='food2Fork API'
                            skill2='Babel'
                            skill3='Webpack'
                            skill4='JS ES6'
                            skill5='Axios'
                            skill6='Git'
                            skill7='HTML5'
                            skill8='CSS3'
                            url1='https://5fb28fc87c56b6000889e936--frosty-lovelace-145715.netlify.app/'
                            url2='https://github.com/SaxonJude/Forkify-Updated'
                            descBlack1='The Forkify Recipe App allows users to search for recipes using the '
                            descPink1='Food2Fork API.'
                            descBlack2='Users can also view the recipe along with the cook time ingredients. Users can add their favorite meals to a favorite meals section which is stored using'
                            descPink2='local storage'
                            descBlack3='so no need for a backend.'
                            descPink3='Webpack'
                            descBlack4='was used as the module bundler to incorporate'
                            descPink4='Axios'
                            descBlack5=' for fetching. No frameworks were used in this application as it was coded in vanilla Javascript.'
                        />
                    </div>
                </div>
            </div>
            <div className={landingStyles.content_container}>
                <img src={upperWave} alt="Wave" />
                <div id='about' className={landingStyles.content_box}>
                    <div ref={el => about = el} className={landingStyles.content_about}>
                        <h4>Who Am I<span>?</span></h4>
                        <p>
                            I’m a front end web developer with a strong <span>passion</span> for web development and constantly learning new skills to grow my knowledge.
                            </p>
                        <p>
                            My experience includes building beautiful static CSS3/JavaScript websites, to developing complex React/Redux applications that require authentication. I also have <span>3 years of experience</span> building <span>eCommerce</span> stores using SaaS technologies such as Shopify and have also done some freelanced WordPress sites on the side.
                            </p>
                        <p>
                            I've dedicated my time to better myself as a developer and a problem
                                solver through early mornings and late nights. I’m in <span>constant pursuit</span> of finding new chances to better myself in accordance with who I was yesterday.
                            </p>
                    </div>
                    <hr />
                    <div ref={el => skills = el} className={landingStyles.content_skills}>
                        <h4>Skills<span>.</span></h4>
                        <ul>
                            <li>
                                <h5><span>Front End</span>:</h5>
                                <section>React, JavaScript, HTML5, CSS3/SCSS, jQuery, Gatsby,  Front-end Frameworks  <p> - (Bootstrap / Materialise / Semantic ui)</p> </section>
                            </li>
                            <li>
                                <h5><span>Backend</span>:</h5>
                                <p>NodeJS, Express, MongoDB, Axios</p>
                            </li>
                            <li id='contact'>
                                <h5><span>Other</span>:</h5>
                                <p>Git, GitHub, Wordpress, Figma, Photoshop, Premiere</p>
                            </li>
                            <li>
                                <h5><span>Learning</span>:</h5>
                                <p>Magento, PHP, Typescript, GraphQL, Redux</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src={lowerWave} alt="Wave" />
            </div>
            <Footer />
        </div>
    );
}

export default App;