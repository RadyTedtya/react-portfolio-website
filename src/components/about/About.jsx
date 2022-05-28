import React from "react"
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
    return(  
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2> 

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>

                </div>
                <div className="about__content">
                    <div className="about__cards">
                         <article className="about__card">  
                             <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>2 Years Working</small>
                         </article>

                         <article className="about__card">
                             <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                         </article>
                         
                         <article className="about__card">
                             <AiOutlineFundProjectionScreen className="about__icon"/>
                            <h5>Porjects</h5>
                            <small>5+ projects</small>
                         </article>
                    </div>
                    <p>
                        Hello, My name is Tedtya RADY. I am master degree student from CQUniversity. I recently finished my internship in Mazda Australia Pty Ltd.
                        and completed my master degree as well.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        
        
        </section>
    )
}
 
export default About