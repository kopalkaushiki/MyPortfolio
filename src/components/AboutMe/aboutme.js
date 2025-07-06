import React from 'react'
import './aboutme.css'

import { motion } from 'framer-motion';
const AboutMe =() => {
    return(
        <section id='aboutme'>
            <motion.div
                className="aboutMe"
                initial={{ x: 400, opacity: 0 }}    
                whileInView={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1.5 }}         
                >
                About me
            </motion.div>
            <div className="aboutPara">
                <span className="aboutsection">Passionate and detail-oriented software developer with strong problem-solving and communication skills. Experienced in building responsive web applications, writing clean and efficient code, and collaborating in agile environments. Eager to learn, and contribute to innovative tech solutions.</span>
            </div>
 
        </section>
        
    )
}

export default AboutMe