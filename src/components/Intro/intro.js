import React from 'react';
import './intro.css';
import bg from '../../assets/Subject.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';
import { motion } from 'framer-motion';
const Intro =() => {
    return(
        <section id="intro">
            <motion.div
                className="newWelcome"
                initial={{ x: -300, opacity: 0 }}    
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}   
                transition={{ duration: 1 }}         
                >
                WELCOME TO MY PORTFOLIO!
            </motion.div>
            <motion.div className="introContent"
                initial={{ x: -400, opacity: 0 }}    
                whileInView={{ x: 0, opacity: 1 }}   
                transition={{ duration: 1, delay: 0.5 }}         
                > 
                <span className="hello">NAMASTE,</span>
                <span className="IntroText"> I'm <span className="introName">Kopal Kaushiki</span> <br /> Software Developer</span>
                <p className="introPara">I'm a skilled Software Developer | Tech Explorer | Problem Solver | Artist at Heart </p>
                <Link> <button className=" btn"> <img src={btnImg} alt="Hire Me" className="btnImage"/> Hire Me </button></Link>
                </motion.div>
                <img src={bg} alt=" " className="introImage"/>
        </section>
    )
}
export default Intro;

