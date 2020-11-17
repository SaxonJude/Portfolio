import React, { useState, useEffect } from 'react';
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
import upperWave from './images/upperWave.svg';
import lowerWave from './images/lowerWave.svg';

const App = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [ success, setSuccess ] = useState(false);
    const [ failure, setFailure ] = useState(false);

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
            <Header />
                <div className={landingStyles.hero}>
                    <div className={landingStyles.inner_hero}>
                        <div className={landingStyles.inner_hero_container}>
                            <img src={logoPink} alt="Pink Logo"/>
                            <h1>Saxon Du Plooy</h1>
                            <h2>React Based Front-end Web Developer</h2>
                        </div>
                        <section>
                            <a href="#projects">Projects</a><span>/</span>
                            <a href="#skills">Skills</a><span>/</span>
                            <a href="#contact">Contact</a>
                        </section>
                    </div>
                </div>
                <div id='projects' className={landingStyles.workList_container}>
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
                             url1=''
                             url2=''
                             url3=''
                             dribble='true'
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
                             url1=''
                             url2=''
                             url3=''
                             dribble='true'
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
                             url1=''
                             url2=''
                             url3=''
                             dribble='true'
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
                             url1=''
                             url2=''
                             url3=''
                             dribble='true'
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
                             url1=''
                             url2=''
                             url3=''
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
                             url1=''
                             url2=''
                             url3=''
                             />
                        </div>
                    </div>
                </div>
                <div className={landingStyles.content_container}>
                    <img src={upperWave} alt="Wave"/>
                    <div className={landingStyles.content_box}>
                        <div className={landingStyles.content_about}>
                            <h4>Who Am I<span>?</span></h4>
                            <p>
                                Hi, I’m <span>Saxon Du Plooy</span>, I was born in <span>Durban, SA</span> and moved to the UK when I was 3. 
                                I’m a self-taught front end web developer with a strong <span>passion</span> for web development I’m constantly learning new skills to grow my knowledge. My experience includes from building beautiful static CSS/JavaScript websites, to developing React/Redux applications that require authentication.
                            </p>
                            <p id='skills'>
                                I've dedicated my time to better myself as a developer and a problem 
                                solver through early mornings and late nights. I’m in a <span>constant pursuit</span> of finding new chances to better myself in accordance to who I was yesterday.
                            </p>
                        </div>
                        <hr />
                        <div className={landingStyles.content_skills}>
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
                        <div className={landingStyles.content_form}>
                            <h4>Get in touch <span>!</span></h4>
                            <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                                <label htmlFor="name">Name <span>*</span></label>
                                <input id="name" name="name" type="text" onChange={handleChange} value={formState.name} />
                                <label htmlFor="email">Email <span>*</span></label>
                                <input id="email" name="email" type="email" onChange={handleChange} value={formState.email} />
                                <label htmlFor="message">Message <span>*</span></label>
                                <input id="message" name="message" type="text" onChange={handleChange} value={formState.message} />
                                <button className={success && !failure ? landingStyles.success : ''} type="submit">{success && !failure ? 'Sent!' : 'Send Message'}</button>
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