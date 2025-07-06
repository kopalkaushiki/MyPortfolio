import React from 'react'
import './projects.css'
import agriImg from '../../assets/agritech.jpg';
import EdtechImg from '../../assets/aedtechImg.png';
import HostelImg from '../../assets/ahostelman.png';
import SkillCon from '../../assets/askillconnectImg2.jpeg';
import { motion } from 'framer-motion';
const Projects =() => {
    return(
        <section id='projects'>
            <motion.div
                className="projectHeading"
                initial={{ x: 400, opacity: 0 }}    
                whileInView={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1.5 }}         
                >
                projects
            </motion.div>

            <div className="projects">
                    <div className=" project">
                    <img src ={agriImg} alt=" " className="ProjectImg"  />
                    <div className="projectText ">
                        <h2>KrishiMitra</h2>
                        <p> KrishMitra is an Agricultural Tech projects thatv helps farmers to solve problems with the help of AI </p>
                        <div className="hoverLinks">
                        <a href="https://krishimitra2.netlify.app/" target="_blank" rel=" ">Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className=" project">
                    <img src ={EdtechImg} alt=" " className="ProjectImg"/>
                    <div className="projectText ">
                        <h2>LumoraAI</h2>
                        <p>Lumora AI is an Educational Tech Project that helps reagional language speaking students visualize their concepts by AI animated videos in their own regional languages</p>
                    </div>
                </div>
                <div className=" project">
                    <img src ={HostelImg} alt=" " className="ProjectImg"/>
                    <div className="projectText ">
                        <h2>DormEase</h2>
                        <p>A Hostel Mangement system that keeps track of the students as well as the incharges using Java Swing </p>
                        <a href="https://github.com/kopalkaushiki/hostel_management_system_java.git" target="_blank" rel=" ">GitHub</a>
                    </div>
                </div>
                <div className=" project">
                    <img src ={SkillCon} alt=" " className="ProjectImg"/>
                    <div className="projectText ">
                        <h2>SkillConnect</h2>
                        <p>Skill Connects helps bring together people of different domains to help colaborate with each other on projects</p>
                    </div>
                </div>
                
               
                
             </div>
 
        </section>
        
    )
}

export default Projects