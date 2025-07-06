import React from 'react'
import './skills.css'
import JavaImg from '../../assets/Java.png';
import JavaScript from '../../assets/javascript.png';
import PythonImg from '../../assets/python.png';
import htmlImg from '../../assets/htmlcss.png';
import mySql from '../../assets/mysql.png';
import { motion } from 'framer-motion';
const Skills =() => {
    return(
        <section id='skills'>
            <motion.div
                className="yourClassName"
                initial={{ x: -400, opacity: 0 }}    
                whileInView={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1 }}         
                >
                technical skills
            </motion.div>

            <span className="skillDesc">A forever learner who will never stop adding onto these skills.</span>
            
            <div className="skillBars">

                <div className=" skillBar">
                    <img src ={JavaImg} alt=" " className="skillBarImg"  />
                    <div className=" skillBarText">
                        <h2>Java/Java Swing</h2>
                        <p></p>
                    </div>
                </div>

                <div className=" skillBar">
                    <img src ={PythonImg} alt=" " className="skillBarImg"  />
                    <div className=" skillBarText">
                        <h2>Python/Flask</h2>
                        <p> </p>
                    </div>
                </div>
                
                <div className=" skillBar">
                    <img src ={JavaScript} alt=" " className="skillBarImg"  />
                    <div className=" skillBarText">
                        <h2>React.js / Framer Motion</h2>
                        <p></p>
                    </div>
                </div>
                <div className=" skillBar">
                    <img src ={JavaScript} alt=" " className="skillBarImg"  />
                    <div className=" skillBarText">
                        <h2>JavaScript</h2>
                        <p></p>
                    </div>
                </div>
                <div className=" skillBar">
                    <img src ={htmlImg} alt=" " className="skillBarImg"  />
                    <div className=" skillBarText">
                        <h2>HTML/CSS</h2>
                        <p></p>
                    </div>
                </div>
                <div className=" skillBar">
                    <img src ={mySql} alt=" " className="skillBarImg"  />
                    <div className=" skillBarText">
                        <h2>MySQL</h2>
                        <p></p>
                    </div>
                </div>
                
             </div>
 
        </section>
        
    )
}

export default Skills