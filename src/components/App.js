import React, { useState, useEffect, useRef } from 'react';
import {gsap, TimelineLite, TweenMax, Power3} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
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
import upperWave from './images/upperWave.svg';
import lowerWave from './images/lowerWave.svg';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [ success, setSuccess ] = useState(false);
    const [ failure, setFailure ] = useState(false);
    let mainLogo = useRef(null);
    let section = useRef(null);
    let hero = useRef(null);
    let projects = useRef(null);
    let projectList = useRef(null);
    let about = useRef(null);
    let skills = useRef(null);
    let form = useRef(null);
    let tl = new TimelineLite({delay: 6.2});

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
        const project6 = projectList.children[5];

        const aboutHeader = about.children[0];
        const aboutP1 = about.children[1];
        const aboutP2 = about.children[2];
        const aboutP3 = about.children[3];
        
        const skillsHeader = skills.children[0];
        const skills1 = skills.children[1].children[0];
        const skills2 = skills.children[1].children[1];
        const skills3 = skills.children[1].children[2];
        const skills4 = skills.children[1].children[3];

        const projectArray = [project1, project2, project3, project4, project5, project6];
        const projectTitle = [projectH5, projectH4];
        const aboutArray = [aboutHeader, aboutP1, aboutP2, aboutP3];
        const skillsArray = [skillsHeader, skills1, skills2, skills3, skills4];

        TweenMax.to(hero, 0, {css: {visibility: 'visible'}});

        tl.staggerFrom([heroImg, heroSaxon, heroDesc], 1, {
            y: 90,
            opacity: 0, 
            ease: Power3.easeOut, 
            delay: .2 
        }, .15, 'hero')

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
                    id: `section-${index+1}`,
                    trigger: projectH4,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    // markers: true
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
                    id: `section-${index+1}`,
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                    // markers: true
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
                    id: `section-${index+1}`,
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    // markers: true
                }
            });
        })

        // SKILLS SECTION

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
                    id: `section-${index+1}`,
                    trigger: el,
                    start: 'center 80%',
                    delay: 1,
                    toggleActions: 'play none none none',
                    // markers: true
                }
            });
        })

        // FORM

        gsap.fromTo(form, {
            opacity: 0,
            y: 100,
        }, {
            y: 0,
            duration: .4,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: form,
                start: 'top 80%',
                toggleActions: 'play none none none',
                // markers: true
            }
        });
        tl.from(section, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1)

    }, [tl]);

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formState })
          })
            .then(() => setSuccess(true))
            .catch(error => {
                alert('Something went wrong submitting the form :(')
                console.log(error);
                setFailure(true);
            });
    
          e.preventDefault();
    }

    return (
        <div>
            <Intro />
            <Header />
                <div ref={el => hero = el} className={landingStyles.hero}>
                    <div className={landingStyles.inner_hero}>
                        <div ref={el => mainLogo = el} className={landingStyles.inner_hero_container}>
                            <img src={logoPink} alt="Pink Logo"/>
                            <div className={landingStyles.inner_hero_line}>
                                <h1>Saxon Du Plooy</h1>
                            </div>
                            <div className={landingStyles.inner_hero_line}>
                                <h2>React Based Front-end Web Developer</h2>
                            </div>
                        </div>
                        <section ref={el => section = el}>
                            <a href="#projects">Projects</a><span>/</span>
                            <a href="#skills">Skills</a><span>/</span>
                            <a href="#contact">Contact</a>
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
                             url1='https://5fb3b9883debc3000709ae1b--focused-almeida-f5f7fa.netlify.app/'
                             url2='https://github.com/SaxonJude/andrew-tud'
                             url3='https://dribbble.com/shots/14590009-Personal-Trainer-Website'
                             dribble='true'
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
                             />
                            <Project
                             img={img4}
                             title='Portfolio'
                             skill1='React'
                             skill2='HTML5'
                             skill3='CSS/SCSS'
                             skill4='Git'
                             skill5='Node.Js'
                             skill6=''
                             skill7=''
                             skill8=''
                             url1=''
                             url2=''
                             url3=''
                             dribble='true'
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
                             url3=''
                             />
                            <Project
                             img={img6}
                             title='ToDo List'
                             skill1='jQuery'
                             skill2='JS Es6'
                             skill3='HTML5'
                             skill4='CSS3'
                             skill5='Git'
                             skill6=''
                             skill7=''
                             skill8=''
                             url1='https://5fb292857c56b600088b15f6--vibrant-lalande-5c24dc.netlify.app/'
                             url2='https://github.com/SaxonJude/todo-jQuery'
                             url3=''
                             />
                        </div>
                    </div>
                </div>
                <div className={landingStyles.content_container}>
                    <img src={upperWave} alt="Wave"/>
                    <div className={landingStyles.content_box}>
                        <div ref={el => about = el} className={landingStyles.content_about}>
                            <h4>Who Am I<span>?</span></h4>
                            <p>
                            Hello, I’m <span>Saxon Du Plooy</span>, born in <span>Durban, SA</span> and re-located to the New Forest when was 3.  I’m a self-taught front end web developer with a strong <span>passion</span> for web development and constantly learning new skills to grow my knowledge. 
                            </p>
                            <p>
                                My experience includes building beautiful static CSS3/JavaScript websites, to developing complex React/Redux applications that require authentication. I’ve also done some freelanced <span>Wordpress</span> sites on the side.
                            </p>
                            <p id='skills'>
                                I've dedicated my time to better myself as a developer and a problem 
                                solver through early mornings and late nights. I’m in a <span>constant pursuit</span> of finding new chances to better myself in accordance to who I was yesterday.
                            </p>
                        </div>
                        <hr />
                        <div ref={el => skills = el} className={landingStyles.content_skills}>
                            <h4>Skills<span>.</span></h4>
                            <ul>
                                <li>
                                    <h5><span>Front End</span>:</h5>
                                    <section>HTML5, CSS3, SCSS/LESS, JavaScript, React, Redux, Gatsby,  Front-end Frameworks  <p> - (Bootstrap / Materialise / Semantic ui)</p> </section>
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
                                    <p>Typescript, jQuery, GraphQL</p>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div ref={el => form = el} className={landingStyles.content_form}>
                            <h4>Get in touch <span>!</span></h4>
                            <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                                <label htmlFor="name">Name <span>*</span></label>
                                <input id="name" name="name" type="text" onChange={handleChange} value={formState.name} />
                                <label htmlFor="email">Email <span>*</span></label>
                                <input id="email" name="email" type="email" onChange={handleChange} value={formState.email} />
                                <label htmlFor="message">Message <span>*</span></label>
                                <input id="message" name="message" type="text" onChange={handleChange} value={formState.message} />
                                <div className={landingStyles.btn_container}>
                                    <button className={`${success && !failure ? landingStyles.success : ''} ${landingStyles.btn} ${landingStyles.btn1}`} type="submit">{success && !failure ? 'Sent!' : 'Send Message'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <img src={lowerWave} alt="Wave"/>
                </div>
            <Footer />
        </div>
    );
}

export default App;